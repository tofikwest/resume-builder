export function selectedTextFunc(func: (value: string) => void) {
  const activeElement: any = document.activeElement
  let selected = ''

  if (activeElement && activeElement.value!) {
    selected = activeElement.value.substring(
      activeElement.selectionStart,
      activeElement.selectionEnd,
    )
  }

  if (selected !== '') {
    func(selected)
    return selected
  }
}

export function findLastMatchSelectTextIndex(
  arr: string[],
  selectText: string,
) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === selectText) {
      return i
    }
  }
  return -1
}

export function addDotToSelectedLine(
  multilineString: any,
  selectedText: string,
) {
  const dotSpace = '• '
  const lines = multilineString.split('\n')
  const lastIndex = findLastMatchSelectTextIndex(lines, selectedText)

  if (lastIndex !== -1) {
    lines[lastIndex] = dotSpace + lines[lastIndex]
  }

  return lines.join('\n')
}
