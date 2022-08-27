export const TOGGLE_OPEN = 'toggle/TOGGLE_OPEN' as const;
export const TOGGLE_CLOSE = 'toggle/TOGGLE_CLOSE' as const;

export const openToggle = () => ({ type: TOGGLE_OPEN });
export const closeToggle = () => ({ type: TOGGLE_CLOSE });

