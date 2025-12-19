"use client";

import { useEffect, useState } from "react";

interface Demo {
    id: number;
    title: string;
    image: string;
    linkLight?: string;
    linkDark?: string;
    linkRTL?: string;
    isNew: boolean;
    category?: string;
}

export default function AdminPage() {
    const [demos, setDemos] = useState<Demo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingDemo, setEditingDemo] = useState<Demo | null>(null);

    useEffect(() => {
        fetchDemos();
    }, []);

    const fetchDemos = async () => {
        try {
            const res = await fetch("/api/demos");
            if (res.ok) {
                const data = await res.json();
                setDemos(data);
            }
        } catch (error) {
            console.error("Failed to fetch demos", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this demo?")) return;
        try {
            const res = await fetch(`/api/demos/${id}`, { method: "DELETE" });
            if (res.ok) {
                setDemos(demos.filter((d) => d.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete demo", error);
        }
    };

    const handleSave = async (demo: Partial<Demo>) => {
        const method = editingDemo ? "PUT" : "POST";
        const url = editingDemo ? `/api/demos/${editingDemo.id}` : "/api/demos";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(demo),
            });

            if (res.ok) {
                fetchDemos();
                setEditingDemo(null);
            }
        } catch (error) {
            console.error("Failed to save demo", error);
        }
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Demos</h1>

            {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow mb-8 text-black">
                <h2 className="text-xl font-semibold mb-4 text-black">
                    {editingDemo ? "Edit Demo" : "Add New Demo"}
                </h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const data = {
                            title: formData.get("title") as string,
                            image: formData.get("image") as string,
                            linkLight: formData.get("linkLight") as string,
                            linkDark: formData.get("linkDark") as string,
                            linkRTL: formData.get("linkRTL") as string,
                            category: formData.get("category") as string,
                            isNew: formData.get("isNew") === "on",
                        };
                        handleSave(data);
                        if (!editingDemo) e.currentTarget.reset();
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <input
                        name="title"
                        placeholder="Title"
                        defaultValue={editingDemo?.title}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        name="image"
                        placeholder="Image Path (e.g., images/demo-1.jpg)"
                        defaultValue={editingDemo?.image}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        name="linkLight"
                        placeholder="Light Link"
                        defaultValue={editingDemo?.linkLight || ""}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        name="linkDark"
                        placeholder="Dark Link"
                        defaultValue={editingDemo?.linkDark || ""}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        name="linkRTL"
                        placeholder="RTL Link"
                        defaultValue={editingDemo?.linkRTL || ""}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        name="category"
                        placeholder="Category"
                        defaultValue={editingDemo?.category || ""}
                        className="border p-2 rounded w-full"
                    />
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="isNew"
                            defaultChecked={editingDemo?.isNew}
                            className="w-5 h-5"
                        />
                        <span>Is New?</span>
                    </label>

                    <div className="md:col-span-2 flex justify-end space-x-4">
                        {editingDemo && (
                            <button
                                type="button"
                                onClick={() => setEditingDemo(null)}
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {editingDemo ? "Update Demo" : "Create Demo"}
                        </button>
                    </div>
                </form>
            </div>

            {/* List Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 border-b text-gray-700">Image</th>
                            <th className="p-4 border-b text-gray-700">Title</th>
                            <th className="p-4 border-b text-gray-700">Category</th>
                            <th className="p-4 border-b text-gray-700">Status</th>
                            <th className="p-4 border-b text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demos.map((demo) => (
                            <tr key={demo.id} className="hover:bg-gray-50 text-gray-800">
                                <td className="p-4 border-b">
                                    <img
                                        src={`/${demo.image}`}
                                        alt={demo.title}
                                        className="w-16 h-10 object-cover rounded"
                                    />
                                </td>
                                <td className="p-4 border-b font-medium">{demo.title}</td>
                                <td className="p-4 border-b">{demo.category}</td>
                                <td className="p-4 border-b">
                                    {demo.isNew && (
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                            New
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 border-b space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditingDemo(demo);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(demo.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {demos.length === 0 && !isLoading && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">
                                    No demos found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
