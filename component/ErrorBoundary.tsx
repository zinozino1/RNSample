import * as React from 'react';

import {View, StyleSheet, Button, Text, SafeAreaView} from 'react-native';

interface ErrorBoundariesState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  any,
  ErrorBoundariesState
> {
  state = {hasError: false, error: null};

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트
    // 에러 종류에 따라 다양한 폴백 UI 구성 가능
    return {hasError: true, error: error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // 에러 로그 기록, 서버로 보낼수도 있음.
    console.log('error : ', error, 'errorInfo : ', errorInfo);
  }

  render() {
    const {hasError, error} = this.state;

    if (!hasError) {
      return this.props.children;
    }

    return (
      // fallBack UI 렌더
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>error 발생 </Text>
      </SafeAreaView>
    );
  }
}
