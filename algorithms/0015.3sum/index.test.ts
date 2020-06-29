import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import { threeSum } from "./index.ts";

log.info("15. 3 Sum");

Deno.test({
  name: `
  0015 3Sum #threeSum
  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, -1, 2],
    [-1, 0, 1]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-1, 0, 1, 2, -1, -4]);
    asserts.assertEquals(
      result,
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    );
  },
});

Deno.test({
  name: `
  0015 3Sum #threeSum
  Given array nums = [-5, 3, 1, 2, 1, 4],

  A solution set is:
  [
    [-5, 1, 4],
    [-5, 2, 3],
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-5, 3, 1, 2, 1, 4]);
    asserts.assertEquals(
      result,
      [
        [-5, 1, 4],
        [-5, 2, 3],
      ],
    );
  },
});

Deno.test({
  name: `
  0015 3Sum #threeSum
  Given array nums = [[-15,1,14],[-15,13,2],[-15,12,3],[-15,10,5],[-15,6,9],[-15,7,8],[-14,0,14],[-14,1,13],[-14,12,2],[-14,10,4],[-14,5,9],[-14,6,8],[-14,7,7],[-1,-13,14],[-13,0,13],[-13,1,12],[-13,10,3],[-13,4,9],[-13,5,8],[-13,6,7],[-12,-2,14],[-1,-12,13],[-12,0,12],[-12,1,11],[-12,10,2],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],[-1,-11,12],[-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],[-10,-4,14],[-10,-3,13],[-10,-2,12],[-1,-10,11],[-10,0,10],[-10,1,9],[-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-5,-9,14],[-4,-9,13],[-3,-9,12],[-2,-9,11],[-1,-9,10],[-9,0,9],[-9,1,8],[-9,2,7],[-9,3,6],[-9,4,5],[-6,-8,14],[-5,-8,13],[-4,-8,12],[-3,-8,11],[-2,-8,10],[-1,-8,9],[-8,0,8],[-8,1,7],[-8,2,6],[-8,3,5],[-8,4,4],[-7,-7,14],[-6,-7,13],[-5,-7,12],[-4,-7,11],[-3,-7,10],[-2,-7,9],[-1,-7,8],[-7,0,7],[-7,1,6],[-7,2,5],[-7,3,4],[-6,-6,12],[-5,-6,11],[-4,-6,10],[-3,-6,9],[-2,-6,8],[-1,-6,7],[-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],[-4,-5,9],[-3,-5,8],[-2,-5,7],[-1,-5,6],[-5,0,5],[-5,1,4],[-5,2,3],[-4,-4,8],[-3,-4,7],[-2,-4,6],[-1,-4,5],[-4,0,4],[-4,1,3],[-4,2,2],[-3,-3,6],[-2,-3,5],[-1,-3,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-1,-2,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]],

  A solution set is:
  [
    [-5, 2, 3],
    [-5, 1, 4]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum(
      [
        -13,
        5,
        13,
        12,
        -2,
        -11,
        -1,
        12,
        -3,
        0,
        -3,
        -7,
        -7,
        -5,
        -3,
        -15,
        -2,
        14,
        14,
        13,
        6,
        -11,
        -11,
        5,
        -15,
        -14,
        5,
        -5,
        -2,
        0,
        3,
        -8,
        -10,
        -7,
        11,
        -5,
        -10,
        -5,
        -7,
        -6,
        2,
        5,
        3,
        2,
        7,
        7,
        3,
        -10,
        -2,
        2,
        -12,
        -11,
        -1,
        14,
        10,
        -9,
        -15,
        -8,
        -7,
        -9,
        7,
        3,
        -2,
        5,
        11,
        -13,
        -15,
        8,
        -3,
        -7,
        -12,
        7,
        5,
        -2,
        -6,
        -3,
        -10,
        4,
        2,
        -5,
        14,
        -3,
        -1,
        -10,
        -3,
        -14,
        -4,
        -3,
        -7,
        -4,
        3,
        8,
        14,
        9,
        -2,
        10,
        11,
        -10,
        -4,
        -15,
        -9,
        -1,
        -1,
        3,
        4,
        1,
        8,
        1,
      ],
    );
    asserts.assertEquals(
      result,
      [
        [-15, 1, 14],
        [-15, 13, 2],
        [-15, 12, 3],
        [-15, 10, 5],
        [-15, 6, 9],
        [-15, 7, 8],
        [-14, 0, 14],
        [-14, 1, 13],
        [-14, 12, 2],
        [-14, 10, 4],
        [-14, 5, 9],
        [-14, 6, 8],
        [-14, 7, 7],
        [-1, -13, 14],
        [-13, 0, 13],
        [-13, 1, 12],
        [-13, 10, 3],
        [-13, 4, 9],
        [-13, 5, 8],
        [-13, 6, 7],
        [-12, -2, 14],
        [-1, -12, 13],
        [-12, 0, 12],
        [-12, 1, 11],
        [-12, 10, 2],
        [-12, 3, 9],
        [-12, 4, 8],
        [-12, 5, 7],
        [-11, -3, 14],
        [-11, -2, 13],
        [-1, -11, 12],
        [-11, 0, 11],
        [-11, 1, 10],
        [-11, 2, 9],
        [-11, 3, 8],
        [-11, 4, 7],
        [-11, 5, 6],
        [-10, -4, 14],
        [-10, -3, 13],
        [-10, -2, 12],
        [-1, -10, 11],
        [-10, 0, 10],
        [-10, 1, 9],
        [-10, 2, 8],
        [-10, 3, 7],
        [-10, 4, 6],
        [-10, 5, 5],
        [-5, -9, 14],
        [-4, -9, 13],
        [-3, -9, 12],
        [-2, -9, 11],
        [-1, -9, 10],
        [-9, 0, 9],
        [-9, 1, 8],
        [-9, 2, 7],
        [-9, 3, 6],
        [-9, 4, 5],
        [-6, -8, 14],
        [-5, -8, 13],
        [-4, -8, 12],
        [-3, -8, 11],
        [-2, -8, 10],
        [-1, -8, 9],
        [-8, 0, 8],
        [-8, 1, 7],
        [-8, 2, 6],
        [-8, 3, 5],
        [-8, 4, 4],
        [-7, -7, 14],
        [-6, -7, 13],
        [-5, -7, 12],
        [-4, -7, 11],
        [-3, -7, 10],
        [-2, -7, 9],
        [-1, -7, 8],
        [-7, 0, 7],
        [-7, 1, 6],
        [-7, 2, 5],
        [-7, 3, 4],
        [-6, -6, 12],
        [-5, -6, 11],
        [-4, -6, 10],
        [-3, -6, 9],
        [-2, -6, 8],
        [-1, -6, 7],
        [-6, 0, 6],
        [-6, 1, 5],
        [-6, 2, 4],
        [-6, 3, 3],
        [-5, -5, 10],
        [-4, -5, 9],
        [-3, -5, 8],
        [-2, -5, 7],
        [-1, -5, 6],
        [-5, 0, 5],
        [-5, 1, 4],
        [-5, 2, 3],
        [-4, -4, 8],
        [-3, -4, 7],
        [-2, -4, 6],
        [-1, -4, 5],
        [-4, 0, 4],
        [-4, 1, 3],
        [-4, 2, 2],
        [-3, -3, 6],
        [-2, -3, 5],
        [-1, -3, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -2, 4],
        [-1, -2, 3],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    );
  },
});


