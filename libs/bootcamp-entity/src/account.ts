export class Account {
  public id?: string;
  public username: string;
  public email: string;
  public pw: string;
  public pwSalt: string;
  public roles: string[];

  public refreshToken: string;
  public verification: string;
  public verified: boolean;
  public verificationExpires: Date;
  public loginAttempts?: number;
  public blockExpires?: Date;
}
