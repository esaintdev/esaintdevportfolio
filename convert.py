
import re

def convert_html_to_jsx(html_content):
    # Replace class with className
    content = html_content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    
    # Replace comments
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    # Self-closing tags
    void_tags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr']
    for tag in void_tags:
        # This regex attempts to find tags that are NOT self-closing already
        # It looks for <tag ... > where ... does not end with /
        pattern = r'<(' + tag + r')([^>]*)(?<!/)>'
        content = re.sub(pattern, r'<\1\2 />', content)
        
    # Convert style strings (simple attempt, might need manual check)
    # This is hard to do perfectly with regex, skipping for now, developer might need to fix styles manually
    
    # Common boolean attributes correction (optional, JSX allow valueless too but strict mode might complain)
    
    # Fix inline styles replacement if simple (e.g. style="display: none" -> style={{display: 'none'}})
    # This is complex, will skip.
    
    return content

try:
    with open('_source/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract body content (simplification)
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if body_match:
        body_content = body_match.group(1)
    else:
        body_content = html # Fallback

    jsx_content = convert_html_to_jsx(body_content)

    final_content = f"""
import React from 'react';

export default function LandingPage() {{
  return (
    <>
{jsx_content}
    </>
  );
}}
"""

    with open('components/LandingPage.tsx', 'w', encoding='utf-8') as f:
        f.write(final_content)
    print("Conversion successful")

except Exception as e:
    print(f"Error: {e}")
