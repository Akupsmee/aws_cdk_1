export const handler = async (event: { name: string }): Promise<any> => {
  return event.name ? `Good Job ${event.name}!` : "Good Job!";
};
