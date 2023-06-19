interface InputEvent {
  id: string;
  name: string;
  date: string;
  launches: Array<EventLaunches> | [];
}

interface EventLaunches {
  image: string;
}

export const transformEventsListData = (data: Array<InputEvent>): Array<RecentData> => {
  const eventsListData = data.map((item: InputEvent) => {
    const { id, name, date: info } = item;
    const image = item.launches[0]?.image ?? null;

    return { id, name, info, image };
  });

  return eventsListData;
};
