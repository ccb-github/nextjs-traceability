import { ObjectID } from "bson"

/**
 * @description a union type for user role across system *customer*, *enterprise*, *admin*
 * for example
 */
export type UserRole = "globalAdmin" | "customer" | "enterprise" | "regulatory" | "checker"

export type UserProfile = {
  _id: ObjectID
  _userId: string
  email: string
  name?: string
  isAdmin: boolean
  subrole?: "seller" | "producer"
  role: UserRole
  emailVerified: boolean
}

