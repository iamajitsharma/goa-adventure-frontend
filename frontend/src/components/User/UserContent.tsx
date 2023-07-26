import React from "react";
import Container from "../common/Container";
import Sidebar from "./Sidebar";

interface UserContentProps {
  children: React.ReactNode;
}

const UserContent: React.FC<UserContentProps> = ({ children }) => {
  return (
    <section>
      <Container>
        <div className="w-full h-full flex flex-col gap-4 md:flex-row">
          <Sidebar />
          <div className="w-full md:w-9/12 h-auto">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default UserContent;
