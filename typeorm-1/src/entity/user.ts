import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm'

@Entity()
export class User {
  // Required for mongodb
  @ObjectIdColumn({ primary: true })
  _id: ObjectID

  @Column({ unique: true, generated: true })
  username: number

  @Column()
  name: string
  
  @Column()
  password: string
}
