import { PropsWithChildren, createContext, useState } from "react";

type ContextType = {
	favIds: string[];
	addFav: (id: string) => void;
	removeFav: (id: string) => void;
};

export const FavoriteContext = createContext<ContextType>({
	favIds: [],
	addFav: (id: string) => {},
	removeFav: (id: string) => {},
});

const FavoriteProvider = ({ children }: PropsWithChildren) => {
	const [favIds, setFavIds] = useState<string[]>([]);
	const addFav = (id: string) => {
		setFavIds((prevState) => [...prevState, id]);
	};
	const removeFav = (id: string) => {
		setFavIds((prevState) => prevState.filter((item) => item !== id));
	};
	return <FavoriteContext.Provider value={{ favIds, addFav, removeFav }}>{children}</FavoriteContext.Provider>;
};
export default FavoriteProvider;
