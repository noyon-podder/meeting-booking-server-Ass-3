import { Router } from 'express'
import { BookingControllers } from './booking.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'
import validateRequest from '../../middleware/validateRequest'
import { BookingValidation } from './booking.validation'

const router = Router()

router.post(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(BookingValidation.createBookingValidationSchema),
  BookingControllers.createBooking,
)

router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookings)

export const BookingRoutes = router
