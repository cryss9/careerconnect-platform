
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

// Define the link type
interface NavLink {
    name: string;
    url: string;
}

// Define links for each role outside of component to avoid recreation on each render
const applicantLinks: NavLink[] = [
    {name:"Find Jobs",url:"find-jobs"},
    {name:"Job History", url:"job-history"}
];

const employerLinks: NavLink[] = [
    {name:"Find Talent",url:"find-talent"},
    {name:"Post Job",url:"post-job/0"},
    {name:"Posted Jobs",url:"posted-jobs/0"}
];

const adminLinks: NavLink[] = [
    {name:"Find Jobs",url:"find-jobs"},
    {name:"Find Talent",url:"find-talent"},
    {name:"Post Job",url:"post-job/0"},
    {name:"Posted Jobs",url:"posted-jobs/0"},
    {name:"Job History", url:"job-history"}
];

const NavLinks = () => {
    const user = useSelector((state: any) => state.user);
    const location = useLocation();
    
    // Get account type from localStorage
    const accountType = localStorage.getItem("accountType") || "";
    
    // Select links based on user role using useMemo to prevent unnecessary recalculations
    const links = useMemo(() => {
        if (!user) return [] as NavLink[];
        
        if (accountType === "APPLICANT") {
            return applicantLinks;
        } else if (accountType === "EMPLOYER") {
            return employerLinks;
        } else if (accountType === "ADMIN") {
            return adminLinks;
        }
        return [] as NavLink[];
    }, [user, accountType]);
    
    return (
        <div className="flex bs-mx:!hidden gap-5 text-mine-shaft-300 h-full items-center">
            {links.map((link, index) => (
                <div 
                    key={index} 
                    className={`${location.pathname==="/" + link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}
                >
                    <Link 
                        className="hover:text-mine-shaft-200" 
                        to={link.url}
                    >
                        {link.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default NavLinks;