import express from 'express';
import { getAllActivities, createActivity, updateActivity, deleteActivity, getActivityById } from '../controllers/activity.controller.js';
import requireAuth from '../middlewares/requireAuth.js';
import Activity from '../models/activity.model.js';

const activityRouter = express.Router();

/**
 * Route handler to get all activities.
 * 
 * @name GET /activities
 * @function
 * @memberof activityRouter
 * @inner
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
activityRouter.get('/', getAllActivities);

/**
 * Middleware to verify the token.
 * 
 * This middleware ensures that the user is authenticated before proceeding to create, update, or delete activities.
 */
activityRouter.use(requireAuth);


/**
 * Route handler to get a single activity by ID.
 * 
 * @name GET /activity/:id
 * @function
 * @memberof eventRouter
 * @inner
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
activityRouter.get('/:id', getActivityById);

/**
 * Route handler to create a new activity.
 * 
 * @name POST /activities
 * @function
 * @memberof activityRouter
 * @inner
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
activityRouter.post('/', createActivity);

/**
 * Route handler to update an activity.
 * 
 * @name PUT /activities/:id
 * @function
 * @memberof activityRouter
 * @inner
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
activityRouter.put('/:id', updateActivity);

/**
 * Route handler to delete an activity.
 * 
 * @name DELETE /activities/:id
 * @function
 * @memberof activityRouter
 * @inner
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
activityRouter.delete('/:id', deleteActivity);

export default activityRouter;
