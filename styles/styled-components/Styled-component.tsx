import tw from "tailwind-styled-components";

interface paraProps {
  $align: boolean;
}

export const Styledheader = tw.div`
    text-xl 
    lg:text-4xl 
    font-semibold 
    text-gray-dark
    capilize

`;
// ${(p) => (p.$align ? "text-center" : "text-left")}
export const StyledLongText = tw.div`

    text-gray
    leading-7
    text-sm md:text-base lg:text-lg

`;

export const Styledlist = tw.li`
    text-gray
    leading-7
    text-sm md:text-base lg:text-lg
`;

export const Styledul = tw.ul`
    space-y-4
    list-disc 
    mx-5
`;

export const StyledLongTextCaps = tw.p`
    uppercase
    text-gray
    leading-7
    text-sm md:text-base lg:text-lg

`;

export const StyledNumber = tw.span`
    rounded-full 
    w-12 lg:w-24 lg:h-24 h-12 
    grid 
    place-content-center 
    text-xl lg:text-4xl 
    font-semibold 
    absolute 
    left-0 top-0 
    text-center
    bg-[#E186E4]
    text-white
`;

export const StyleStrokedText = tw.h1`
    userStroke
    lg:text-5xl
    text-3xl
    font-bold
        mb-4
`;

export const StyledUserSubHead = tw.p`
    uppercase 
    lg:text-lg
    text-sm 
    text-primary-magenta 
    font-medium
`;

export const StyledFollowIcons = tw.a`
    p-2 
    inline-block 
    rounded-full 
    text-primary-blue hover:text-primary-magenta
    transitions
    cursor-pointer
    bg-zinc-200
`;

export const StyledNavDropdown = tw.a`
    flex 
    space-x-2 
    hover:text-primary-magenta 
    text-primary-blue/70 
    items-center
    transitions
`;

export const StyledSubheader = tw.h2`
    text-lg 
    md:text-xl lg:text-xl text-gray-dark 
    font-semibold
`;
