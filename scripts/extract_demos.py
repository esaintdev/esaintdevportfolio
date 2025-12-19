
import re
import json

def extract_demos(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    demos = []
    # Regex to find demo items
    # Structure:
    # <div class="tp-demo-item ...">
    #   ... <span class="tp-demo-new">NEW</span> (optional)
    #   ... <img src="images/..." ...>
    #   ... href="aleric/index.html" (Light)
    #   ... href="aleric/index-dark.html" (Dark)
    #   ... href="aleric-rtl/index.html" (RTL)
    #   ... <h4 class="tp-demo-title"><a ...>Title</a></h4>

    # This is complex to regex across multiple lines.
    # We'll split by "tp-demo-item" div
    
    # JSX uses className instead of class
    content = content.replace('className=', 'class=') # Simplify parsing
    
    items = content.split('class="tp-demo-item')
    # Skip the first split as it's before the first item
    for item in items[1:]:
        demo = {}
        
        # Is New?
        if 'tp-demo-new' in item:
            demo['isNew'] = True
        else:
            demo['isNew'] = False
            
        # Image
        img_match = re.search(r'<img src="([^"]+)"', item)
        if img_match:
            demo['image'] = img_match.group(1)
            
        # Title
        title_match = re.search(r'tp-demo-title"><a[^>]*>([^<]+)</a>', item)
        if title_match:
            demo['title'] = title_match.group(1)
            
        # Links - this is tricky because there are 3 links.
        # Usually order is Light, Dark, RTL.
        links = re.findall(r'href="([^"]+)"', item)
        # Filter out links that are not demo links (e.g. title link usually matches one of them)
        # Expected links in button wrap:
        # 1. Light
        # 2. Dark
        # 3. RTL
        # Plus the title link (usually same as Light)
        
        # We look for the tp-demo-btn-wrap block
        btn_wrap = re.search(r'tp-demo-btn-wrap(.*?)</div>', item, re.DOTALL)
        if btn_wrap:
            btn_area = btn_wrap.group(1)
            btn_links = re.findall(r'href="([^"]+)"', btn_area)
            if len(btn_links) >= 1:
                demo['linkLight'] = btn_links[0]
            if len(btn_links) >= 2:
                demo['linkDark'] = btn_links[1]
            if len(btn_links) >= 3:
                demo['linkRTL'] = btn_links[2]
        
        # Category - inferred from title? Or HTML doesn't have explicit category class. 
        # Schema has category. I'll use "Agency" as default or try to guess.
        demo['category'] = "General" 
        
        if 'title' in demo and 'image' in demo:
            demos.append(demo)

    return demos

demos = extract_demos('components/DemoSection.tsx')
print(json.dumps(demos, indent=2))
with open('scripts/demos.json', 'w') as f:
    json.dump(demos, f, indent=2)
