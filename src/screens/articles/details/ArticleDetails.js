import React from "react";
import {
  SafeAreaView, View, Text, ActivityIndicator,
} from "react-native";

import { WebView } from "react-native-webview";

import styles from "./styles";
import { TEST_ID_ARTICLE_DETAILS_SCREEN_WEBVIEW } from "../../../utils/constants/testIds";

/* -------------------------------------------------------------------------- */
/*                 This is the screen to display details of an article                    */
/* -------------------------------------------------------------------------- */

export default class ArticleDetails extends React.PureComponent {

  /* ------------------------ Header properties ------------------------ */
  static navigationOptions = {
    title: "Article Details",
    headerStyle: {
      backgroundColor: "#47e4c2",
    },
    headerTintColor: "#fff",
  };

  constructor(props) {
    super(props);
    this.state = {
      articleUrl: "",
    };
  }

  componentDidMount() {
    const articleUrl = this.getArticleUrlFromProps();
    this.setArticleUrlInState(articleUrl);
  }

  /* --------------- Returns article url passed from navigation --------------- */
  getArticleUrlFromProps = () => {
    const { navigation } = this.props;
    return navigation.getParam("articleUrl", "");
  }

  /* --------------- This updates the state with value of article url -------------- */
  setArticleUrlInState = (articleUrl) => {
    this.setState({
      articleUrl,
    });
  }

  /* ------------------- This is displayed while article is loading ------------------- */
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )

  /* ------------------ displayed when article fails to load ------------------ */
  renderError = () => (
    <View style={styles.container}>
      <Text>Failed to load article, try again later.</Text>
    </View>
  )

  render() {
    const { articleUrl } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          testID={TEST_ID_ARTICLE_DETAILS_SCREEN_WEBVIEW}
          source={{ uri: articleUrl }}
          startInLoadingState
          renderLoading={this.renderLoading}
          renderError={this.renderError}
        />
      </SafeAreaView>
    );
  }
}
