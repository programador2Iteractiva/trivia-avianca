import { Outlet } from "react-router-dom";

function RulesView() {
  return (
    <div>
      <div>LOGOS</div>
      <div>
        <div>LOGO GRANDE</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RulesView;
