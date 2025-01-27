type TechBadgeProps = {
    name: string
}

const TechBadge = ({name}: TechBadgeProps) => {
    return ( 
        <span className="text-primary bg-primary/50 rounded-lg px-3
        py-1">
            {name}
        </span>
     );
}
 
export default TechBadge;