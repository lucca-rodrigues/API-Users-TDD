import { RepositoryInterface } from "../../@shared/repository/repository.interface";
import { User } from "../entity/user.entity";

export interface UserRepositoryInterface extends RepositoryInterface<User> {}
