export const getComments = async () => {
  return [
    {
      id: "1",
      body: "What do you think about the site?",
      username: "Josh",
      userId: "1",
      parentId: null,
      createdAt: "2022-03-01T23:00:33.010+02:00",
    },
  ];
};

export const CreateComment = async (text, parentId = null, ipAddress) => {
  const data ={
    id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: ipAddress ,
      username: ipAddress,
      createdAt: new Date().toISOString(),
  };
    localStorage.setItem("text", JSON.stringify(data));
     
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: ipAddress ,
    username: ipAddress,
    createdAt: new Date().toISOString(),
  };
};
 
// const saveData = (data, file) =>{
//   const comt ={
//     id: Math.random().toString(36).substr(2, 9),
//       body: text,
//       parentId,
//       userId: ipAddress ,
//       username: ipAddress,
//       createdAt: new Date().toISOString(),
//   }
//      const jsonData = localStorage.setItem('text', JSON.stringify(comt, null, 2));
//      fs.writeFile(file, jsonData)
//      saveData(comt, 'comments.json')
// }
export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
