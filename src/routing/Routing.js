import ArticleDetails from "../screens/articles/details/ArticleDetails";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ArticlesScreen from "../screens/articles/list/ArticlesScreen";

const AppNavigator = createStackNavigator(
  {
    Articles: ArticlesScreen,
    ArticleDetails,
  },
  
  {
    initialRouteName: "Articles",
  },
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
