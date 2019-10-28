import {TypeAnswer} from './TypeAnswer';
import {TypeComment} from './TypeComment';
import {TypePrivilege} from './TypePrivilege';
import {TypeQuestion} from './TypeQuestion';
import {TypeSite} from './TypeSite';
import {TypeTag} from './TypeTag';

export interface TypeWrapper {
  backoff?: number;
  error_id?: number;
  error_message?: string;
  error_name?: string;
  has_more: boolean;
  items:
    | TypeAnswer[]
    | TypeComment[]
    | TypePrivilege[]
    | TypeQuestion[]
    | TypeSite[]
    | TypeTag[];
  page?: number;
  page_size?: number;
  quota_max: number;
  quota_remaining: number;
  total?: number;
  type?: string;
}
