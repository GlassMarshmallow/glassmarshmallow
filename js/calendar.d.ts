/** «gm-date-change»: el día elegido. */
export interface CalendarDateChangeDetail {
  /** AAAA-MM-DD */
  date: string;
}

/** «gm-month-change»: el mes que se ve y los días de la cuadrícula, para pedir los días con algo (data-marked). */
export interface CalendarMonthChangeDetail {
  /** AAAA-MM */
  month: string;
  /** Primer día que se ve (puede ser del mes anterior), AAAA-MM-DD */
  from: string;
  /** Último día que se ve (puede ser del mes siguiente), AAAA-MM-DD */
  to: string;
}

export declare function initCalendar(root: HTMLElement): () => void;
export declare function initCalendars(scope?: ParentNode): Array<() => void>;
