const Nav = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 inline-flex mx-auto justify-between backdrop-filter backdrop-blur-lg w-3/4 rounded-[1rem] bg-neutral-100 bg-opacity-30 sm:w-1/2 cursor-pointer border-b">
      <div class="flex justify-between p-4 w-full">
        <div class="size-7">
          <img src="/logo.svg" alt="logo" className="" />
        </div>
        <div class="text-neutral-400">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 24L12 0" stroke="currentColor" stroke-width="2"></path>
            <path d="M24 12H0" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
