import { RespondType } from './RespondType';

export interface MainPageSchema {
    data?: RespondType;
    isLoading: boolean;
    error?: string;
}
