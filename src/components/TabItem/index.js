// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onActiveTab} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? 'button active-tab' : 'button'

  function onClickTab() {
    onActiveTab(tabId)
  }

  return (
    <li>
      <button type="button" className={activeTabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
