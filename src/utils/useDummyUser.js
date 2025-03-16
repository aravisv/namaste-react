const useDummyUser = () => {
  const getUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ userName: "Aravinda" });
      }, 2000);
    });
  };
  return { getUser };
};

export default useDummyUser;
