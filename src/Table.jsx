import React from 'react';

function Table({ posts }) {
  const header = (
    <tr className="bg-gray-100">
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
        <span className="text-right">Name</span>
      </th>
      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
        CreatedAt
      </th>
      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
        Status
      </th>
      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
        Post
      </th>
      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
        Action
      </th>
    </tr>
  );

  const dataRows = posts.map((post, index) => (
    <tr key={index} className="bg-white border-t border-gray-200">
      <td className="px-4 py-3 whitespace-nowrap">
        <span className="text-blue-500">{post.name}</span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-right font-light">{new Date(post.createdAt).toLocaleString()}</td>
      <td className="px-4 py-3 whitespace-nowrap text-right font-light">{post.status}</td>
      <td className="px-4 py-3 whitespace-nowrap text-right font-light">{post.content}</td>
      <td className="px-4 py-3 whitespace-nowrap text-right font-light">
        <select className="text-indigo-600 hover:text-indigo-900">
          <option value="delete">Delete</option>
          <option value="edit">Edit</option>
        </select>
      </td>
    </tr>
  ));

  return (
    <div className="container mx-auto h-full pb-8 overflow-x-auto overflow-y-scroll">
      <table className="w-full divide-y divide-gray-200 text-sm">
        <thead>{header}</thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataRows}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
