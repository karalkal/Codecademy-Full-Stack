const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // Find the restaurant with the matching id.
  const starredRestaurant = STARRED_RESTAURANTS.find((restaurant) => restaurant.id === id);
  // If the restaurant doesn't exist, let the client know.
  if (!starredRestaurant) {
    res.sendStatus(404);
    return;
  }
  // Instead of the below, get the data for the starred restaurant from list of all restaurants
  // res.json(starredRestaurant);
  const result = ALL_RESTAURANTS.find(rst => rst.id === starredRestaurant.restaurantId);
  res.json(result);
});

/**
 * Feature 8: Adding to your list of starred restaurants.
 */
router.post("/", (req, res) => {
  const restaurantId = req.body.id;
  // Generate a unique ID for the new restaurant.
  const newId = uuidv4();

  // will get name property as well as does not show name if starred in FE
  const foundRestaurant = ALL_RESTAURANTS.find(rst => rst.id === restaurantId);
  const newStarredRestaurant = {
    id: newId,
    restaurantId,
    comment: '',
    name: foundRestaurant.name
  };

  // Add the new restaurant to the list of restaurants.
  // ... but first check if already there
  const alreadyInFavourites = STARRED_RESTAURANTS.find(restaurant => restaurant.restaurantId === newStarredRestaurant.restaurantId);
  if (alreadyInFavourites) {
    res.sendStatus(400);
    return;
  }

  STARRED_RESTAURANTS.push(newStarredRestaurant);

  res.json(newStarredRestaurant);
});

/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const newListOfRestaurants = STARRED_RESTAURANTS.filter(
    (restaurant) => restaurant.id !== id
  );
  // New List has same len as the original -->> The user tried to delete a restaurant that doesn't exist.
  if (STARRED_RESTAURANTS.length === newListOfRestaurants.length) {
    res.sendStatus(404);
    return;
  }
  // else: overwrite
  STARRED_RESTAURANTS = newListOfRestaurants;

  res.sendStatus(200);
});

/**
 * Feature 10: Updating your comment of a starred restaurant.
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const foundRestaurant = STARRED_RESTAURANTS.find(sr => sr.id === id);
  if (!foundRestaurant) {
    res.sendStatus(404);
    return;
  }
  foundRestaurant.comment = req.body.newComment
  res.sendStatus(200);
});

module.exports = router;