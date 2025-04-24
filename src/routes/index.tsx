import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Login from "../features/auth/components/Login";
import Register from "../features/auth/components/Register";

interface LayoutProps {
	sidebarProps: {
		isOpen: boolean;
		onClose: () => void;
	};
	navbarProps: {
		onOpenSidebar: () => void;
	};
}

interface AppRouterProps {
	layoutProps: LayoutProps;
}

const AppRouter: React.FC<AppRouterProps> = ({ layoutProps }) => {
	return (
		<Routes>
			{/* Auth sayfaları */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* Ana sayfalar - hepsine props gönderiyoruz */}
			<Route
				path="/"
				element={
					<Home
						navbarProps={layoutProps.navbarProps}
						sidebarProps={layoutProps.sidebarProps}
					/>
				}
			/>
			<Route
				path="/home"
				element={
					<Home
						navbarProps={layoutProps.navbarProps}
						sidebarProps={layoutProps.sidebarProps}
					/>
				}
			/>
			<Route
				path="/about"
				element={
					<About
						navbarProps={layoutProps.navbarProps}
						sidebarProps={layoutProps.sidebarProps}
					/>
				}
			/>
			<Route
				path="/courses"
				element={
					<Courses
						navbarProps={layoutProps.navbarProps}
						sidebarProps={layoutProps.sidebarProps}
					/>
				}
			/>
			<Route
				path="/contact"
				element={
					<Contact
						navbarProps={layoutProps.navbarProps}
						sidebarProps={layoutProps.sidebarProps}
					/>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
