const AuthLayout = ({ children }) => {
    return (
      <div className="d-flex flex-column flex-root" id="kt_body">
        {children}
      </div>
    );
  };
  
  export default AuthLayout;