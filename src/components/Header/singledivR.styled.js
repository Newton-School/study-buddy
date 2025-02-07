import { NSButton } from '@newtonschool/grauity';


export const DIVR = () => (
    <NSButton
        variant="primary"
        onClick={() => {
            setShowFormErrors(true);
        }}
    >
        Sign Up
    </NSButton>
);
export default DIVR;