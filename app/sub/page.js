/** @jsx h */
const {
  h,
  useEffect,
  ActionBar,
  Button,
  Page,
  ScrollView,
  StackLayout
} = require('nativescript-preact')

export function SubPage () {
  // @see: https://docs.nativescript.org/core-concepts/navigation
  const handlePress = ({ object }) => object.page.frame.goBack()

  useEffect(() => {
    console.log('SubPage mounted')
  }, [])

  console.log('SubPage rendered')

  return (
    <Page>
      <ActionBar title='Sub Page' />
      <ScrollView>
        <StackLayout>
          <Button onPress={handlePress}>Go Back</Button>
        </StackLayout>
      </ScrollView>
    </Page>
  )
}
