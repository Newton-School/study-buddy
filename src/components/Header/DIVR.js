import { NSButton } from '@newtonschool/grauity';


export const DIVR = () => (
    <NSButton
        variant="primary"
        size='medium'
        padding="8px 12px"
        onClick={() => {
            setShowFormErrors(true);
        }}
    >
        Sign Up
    </NSButton>
);
export default DIVR;