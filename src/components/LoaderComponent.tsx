import React, { useState, useEffect } from "react";
import {Spinner} from "@nextui-org/react";



const LoaderComponent = (props: any) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div>
          <Spinner size="lg" color="default"/>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </main>
  );
};

export default LoaderComponent;
