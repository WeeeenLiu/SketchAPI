/* globals expect */
import { Group } from '../components/Group'
import { Text } from '../components/Text'

export const tests = {
  'an empty document should have an empty selection': (context, document) => {
    expect(document.selectedLayers.isEmpty).toBe(true)
  },

  'should clear the selection': (context, document) => {
    const group = new Group({
      parent: document.selectedPage,
      selected: true,
    })
    const selection = document.selectedLayers
    expect(group.selected).toBe(true)
    expect(selection.isEmpty).toBe(false)
    selection.clear()
    expect(group.selected).toBe(false)
    expect(selection.isEmpty).toBe(true)
  },

  'should return the length without wrapping all the object': (
    context,
    document
  ) => {
    // eslint-disable-next-line
    const group = new Group({
      parent: document.selectedPage,
      selected: true,
    })
    // eslint-disable-next-line
    const text = new Text({
      parent: document.selectedPage,
      selected: true,
    })
    const selection = document.selectedLayers

    expect(selection.length).toBe(2)
  },

  'should be able to go through the layers': (context, document) => {
    const group = new Group({
      parent: document.selectedPage,
      selected: true,
    })
    // eslint-disable-next-line
    const text = new Text({
      parent: document.selectedPage,
      selected: true,
    })
    const selection = document.selectedLayers

    let iterations = 0
    let groups = 0
    selection.layers.forEach(layer => {
      iterations += 1
      if (layer.isEqual(group)) {
        groups += 1
      }
    })
    expect(iterations).toBe(2)
    expect(groups).toBe(1)
  },
}
