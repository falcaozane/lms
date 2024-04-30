const AuthLayout = ({ children }:{ children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex items-center justify-center my-10">
            {children}
        </div>
     );
}
 
export default AuthLayout;