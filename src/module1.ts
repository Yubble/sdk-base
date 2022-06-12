/*
 * @Name:
 * @Description:
 * @Author: 刘燕保
 * @Date: 2021-10-31 12:07:41
 */
export const module1 = name => {
  console.log("name is ", name);
};

export const getEvenNo = (arr: Array<number>) => {
  return arr.map(el => {
    return el % 2 === 0;
  });
};
