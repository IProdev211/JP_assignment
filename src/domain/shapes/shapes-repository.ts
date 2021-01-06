import { apiClient } from '../../infrastructure/api-client';
import { shapeFactory, Shape } from './shape';

export const shapesRepository = {
  async getShapes(): Promise<Shape[]> {
    try {
      const response = await apiClient.get('/shapes.json');

      const rawShapes = response.data;

      const shapes = rawShapes.map((rawShape: any) =>
        shapeFactory({
          id: rawShape.id,
          color: rawShape.color,
          shape: rawShape.shape
        })
      );

      return shapes;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
