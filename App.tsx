import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import FavoriteProvider from "./src/store/context";

export default function App() {
	return (
		<FavoriteProvider>
			<NavigationContainer>
				<Root />
			</NavigationContainer>
		</FavoriteProvider>
	);
}
