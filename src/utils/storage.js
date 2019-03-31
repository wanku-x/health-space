import { AsyncStorage } from 'react-native'

/**
 * Читает из памяти устройства данные о выполненных упражнениях
 * @returns Promise<Array<Object>> - промис, который зарезолвится с массивом выполненных упражнений
 */
export const readCompletedSets = async () => {
  try {
    const completedSets = await AsyncStorage.getItem('@Healthspace:completedSets')

    return completedSets ? JSON.parse(completedSets) : [];
  } catch (error) {
    console.error('Ошибка чтения в AsyncStorage');

    throw error
  }
}

/**
 * Записывает в память устройства данные о выполненном упражнении
 * @param {Object} completedSetInfo объект с информацией о выполненном упражнении
 */
export const writeCompletedSet = async (completedSetInfo) => {
  try {
    const completedSets = await readCompletedSets();
    const updatedCompletedSets = [...completedSets, completedSetInfo];

    await AsyncStorage.setItem('@Healthspace:completedSets', JSON.stringify(updatedCompletedSets));
  } catch (error) {
    console.error('Ошибка записи в AsyncStorage');

    throw error
  }
}
