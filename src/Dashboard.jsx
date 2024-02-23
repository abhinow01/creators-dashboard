import React, { useState } from 'react';
import Table from './Table';
import { postData as initialPostData } from './data';
import Modal from './Modal';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    id: null,
    name: '',
    createdAt: '',
    status: '',
    content: ''
  });
  const [postData, setPostData] = useState(initialPostData);

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleSave = (post) => {
    setPostData(prevPostData => [...prevPostData, post]);
    setNewPost({
      id: null,
      name: '',
      createdAt: '',
      status: '',
      content: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>Overview</div>
        <div className="flex items-center">
          <button className="mr-2">Last month</button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>Posts</div>
        <div>
          <button onClick={handleCreate} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Create</button>
        </div>
      </div>
      <div>
        <Table posts={postData} />
      </div>
      <Modal isOpen={isModalOpen} onSave={handleSave} />
    </div>
  );
}

export default Dashboard;
