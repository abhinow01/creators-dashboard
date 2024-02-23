
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function Modal({ isOpen, onSave }) {
  const [post, setPost] = useState({
    name: '',
    createdAt: '',
    status: '',
    content: ''
  });

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
        if (!quillRef.current) {
            const editorElement = document.createElement('div');
            editorRef.current.appendChild(editorElement);
            quillRef.current = new Quill(editorElement, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ color: [] }, { background: [] }],
                        ['link'],
                        ['clean']
                    ]
                }
            });

            quillRef.current.on('text-change', () => {
                setPost(prevPost => ({
                    ...prevPost,
                    content: quillRef.current.root.innerHTML
                }));
            });
        }
    }
}, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSave = () => {
    const cleanedContent = post.content.replace(/<\/?p>/g, '');
    onSave({ ...post, content: cleanedContent, id: Date.now() });
  };

  return (
    <div className={`modal fixed inset-0 z-50 overflow-auto ${isOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog bg-white w-1/2 p-4 mx-auto mt-24 rounded shadow-lg">
        <div className="modal-content">
          <input type="text" name="name" placeholder="Post Name" className="w-full mb-4 p-2 border border-gray-300 rounded" value={post.name} onChange={handleChange} />
          <input type="text" name="createdAt" placeholder="Created At" className="w-full mb-4 p-2 border border-gray-300 rounded" value={post.createdAt} onChange={handleChange} />
          <input type="text" name="status" placeholder="Status" className="w-full mb-4 p-2 border border-gray-300 rounded" value={post.status} onChange={handleChange} />
          <div ref={editorRef} className="w-full mb-4 border border-gray-300 rounded"></div>
          <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
