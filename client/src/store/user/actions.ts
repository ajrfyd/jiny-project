export const REQ_LOG_IN = 'user_REQ_LOG_IN'as const;
export const REQ_LOG_OUT = 'user_REQ_LOG_OUT' as const;

export const OPEN_MODAL = 'user_OPEN_MODAL'as const;
export const CLOSE_MODAL = 'user_CLOSE_MODAL' as const;

export const reqLogin = (email: string, userName: string) => ({ type: REQ_LOG_IN, payload: { email, userName } });
export const reqLogout = () => ({ type: REQ_LOG_OUT });

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });