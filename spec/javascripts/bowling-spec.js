describe ("new bowlingGame()", function() {
  var game;

  beforeEach(function() {
    game=new bowlingGame();
  });

  it("should return a bowlingGame object", function() {
    expect(new bowlingGame()).toBeDefined();
  });

  describe("that has", function() {
    it("no spare", function() {
      expect(game.spare).toEqual(false);
    });
    it("no strike", function() {
      expect(game.strike).toEqual(false);
    });
    it("frame is an empty array", function() {
      expect(game.frame.length).toEqual(0);
    });
    it("score is an empty array", function() {
      expect(game.score.length).toEqual(0);
    });
  });

//   describe("and whose grow function", function() {
//     xit("should increase the age of the tree by 1 year", function() {
//       tree.grow();
//       expect(tree.age).toEqual(1);
//     });

//     xit("should increase the height of the tree by 10 inches", function() {
//       tree.grow();
//       expect(tree.height).toEqual(10);
//     });
//   });

//   describe("Before reaching fruit-bearing age", function() {
//     xit("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
//       while (tree.age < (FRUIT_BEARING_AGE-1)) {
//         tree.grow();
//       }
//       expect(tree.orangeCount).toEqual(0);
//     });
//   });

//     describe("After reaching fruit-bearing age", function() {
//       beforeEach(function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//       });

//       xit("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
//         expect(tree.orangeCount).toBeGreaterThan(0);
//       });
//       describe("dropOrange", function() {
//         xit("should return an orange that is removed from oranges", function() {
//           expect(tree.dropOrange()).toBeDefined();
//         });
//       });
//       describe ("die",function() {
//         xit("should be alive when age <= MAX_AGE",function() {
//           while (tree.age < (MAX_AGE-1)) {
//             tree.grow();
//           }
//           tree.grow();
//           expect(tree.isAlive).toEqual(true);
//         });
//         xit("should die when age > MAX_AGE",function() {
//           while (tree.age < MAX_AGE) {
//             tree.grow();
//           }
//           tree.grow();
//           expect(tree.isAlive).toEqual(false);
//         });
//       });
//     });
//     describe ("pickOrange, a function to manipulate a tree", function() {
//       it("should return a orange object", function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//         expect(pickOrange(tree)).toBeDefined();
//       });

//       xit("should return an orange with a random diameter > 0", function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//         var orange = pickOrange(tree);
//         expect(orange.diameter).toBeGreaterThan(0);
//       });
//     });
});

