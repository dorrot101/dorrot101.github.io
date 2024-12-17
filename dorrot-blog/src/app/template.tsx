const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="bottom-0 left-0 w-full text-left">
        <p className="scroll-left">Flying Text</p>
      </div>
    </>
  );
};

export default RootTemplate;
