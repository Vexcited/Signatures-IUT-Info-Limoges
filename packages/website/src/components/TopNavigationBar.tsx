import type { FlowComponent } from "solid-js";

const TopNavigationBar: FlowComponent = (props) => {
  return (
    <nav class="z-40 sticky top-[77px] h-[36px] bg-[rgb(9,9,9)] border-b border-[rgb(40,40,40)]/40">
      <div class="container mx-auto flex h-full">
        {props.children}
      </div>
    </nav>
  );
};

export default TopNavigationBar;
