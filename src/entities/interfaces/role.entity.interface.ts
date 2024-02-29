import { RoleEnum } from 'src/configs/enums/role.enum';
import { IAccountEntity } from './account.entity.interface';
import { IBaseEntity } from './base.entity.interface';

export interface IRole extends IBaseEntity {
  roleId: string;
  roleName: RoleEnum;

  accountId: IAccountEntity;
}
