module.exports = [
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './en-US/_lib/localize.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './en-US/_lib/match.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
(()=>{
    const e = new Error("Cannot find module '../toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = toDate(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const laterStartOfDay = startOfDay(laterDate_);
    const earlierStartOfDay = startOfDay(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function getDayOfYear(date, options) {
    const _date = toDate(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, startOfYear(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function getISOWeek(date, options) {
    const _date = toDate(date, options?.in);
    const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function getISOWeekYear(date, options) {
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function getWeek(date, options) {
    const _date = toDate(date, options?.in);
    const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function getWeekYear(date, options) {
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './lightFormatters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return lightFormatters.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return lightFormatters.M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return lightFormatters.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return lightFormatters.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return lightFormatters.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return lightFormatters.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return lightFormatters.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return lightFormatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/format/longFormatters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './_lib/protectedTokens.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = toDate(date, options?.in);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = longFormatters[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
            warnOrThrowProtectedError(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
__turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module './isSameHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isToday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isTomorrow.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWeekend.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWithinInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isYesterday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfDecade.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lightFormat.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './max.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './milliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './min.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './monthsToQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './monthsToYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextFriday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextMonday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parse.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parseISO.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parseJSON.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousFriday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousMonday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './quartersToMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './quartersToYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './roundToNearestHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './roundToNearestMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './set.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDayOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDefaultOptions.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISODay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfDecade.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfToday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfTomorrow.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfYesterday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './sub.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subBusinessDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subISOWeekYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subWeeks.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './transpose.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './weeksToDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function addDays(date, amount, options) {
    const _date = toDate(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
const __TURBOPACK__default__export__ = addDays;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMonths",
    ()=>addMonths,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function addMonths(date, amount, options) {
    const _date = toDate(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return _date;
    }
    const dayOfMonth = _date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    const endOfDesiredMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}
const __TURBOPACK__default__export__ = addMonths;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/add.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function add(date, duration, options) {
    const { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    // Add years and months
    const _date = toDate(date, options?.in);
    const dateWithMonths = months || years ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(_date, months + years * 12) : _date;
    // Add weeks and days
    const dateWithDays = days || weeks ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(dateWithMonths, days + weeks * 7) : dateWithMonths;
    // Add days, hours, minutes, and seconds
    const minutesToAdd = minutes + hours * 60;
    const secondsToAdd = seconds + minutesToAdd * 60;
    const msToAdd = secondsToAdd * 1000;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, +dateWithDays + msToAdd);
}
const __TURBOPACK__default__export__ = add;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addBusinessDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBusinessDays",
    ()=>addBusinessDays,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWeekend.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
function addBusinessDays(date, amount, options) {
    const _date = toDate(date, options?.in);
    const startedOnWeekend = isWeekend(_date, options);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in, NaN);
    const hours = _date.getHours();
    const sign = amount < 0 ? -1 : 1;
    const fullWeeks = Math.trunc(amount / 5);
    _date.setDate(_date.getDate() + fullWeeks * 7);
    // Get remaining days not part of a full week
    let restDays = Math.abs(amount % 5);
    // Loops over remaining days
    while(restDays > 0){
        _date.setDate(_date.getDate() + sign);
        if (!isWeekend(_date, options)) restDays -= 1;
    }
    // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && isWeekend(_date, options) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if (isSaturday(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
        if (isSunday(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
    }
    // Restore hours to avoid DST lag
    _date.setHours(hours);
    return _date;
}
const __TURBOPACK__default__export__ = addBusinessDays;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMilliseconds",
    ()=>addMilliseconds,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function addMilliseconds(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, +toDate(date) + amount);
}
const __TURBOPACK__default__export__ = addMilliseconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addHours.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHours",
    ()=>addHours,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
;
function addHours(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMilliseconds"])(date, amount * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInHour"], options);
}
const __TURBOPACK__default__export__ = addHours;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addISOWeekYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addISOWeekYears",
    ()=>addISOWeekYears,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './setISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function addISOWeekYears(date, amount, options) {
    return setISOWeekYear(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options) + amount, options);
}
const __TURBOPACK__default__export__ = addISOWeekYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMinutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMinutes",
    ()=>addMinutes,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function addMinutes(date, amount, options) {
    const _date = toDate(date, options?.in);
    _date.setTime(_date.getTime() + amount * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"]);
    return _date;
}
const __TURBOPACK__default__export__ = addMinutes;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addQuarters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addQuarters",
    ()=>addQuarters,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
;
function addQuarters(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(date, amount * 3, options);
}
const __TURBOPACK__default__export__ = addQuarters;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addSeconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSeconds",
    ()=>addSeconds,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMilliseconds.js [app-ssr] (ecmascript)");
;
function addSeconds(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMilliseconds"])(date, amount * 1000, options);
}
const __TURBOPACK__default__export__ = addSeconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWeeks",
    ()=>addWeeks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
;
function addWeeks(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(date, amount * 7, options);
}
const __TURBOPACK__default__export__ = addWeeks;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addYears",
    ()=>addYears,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
;
function addYears(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(date, amount * 12, options);
}
const __TURBOPACK__default__export__ = addYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/areIntervalsOverlapping.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areIntervalsOverlapping",
    ()=>areIntervalsOverlapping,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
    const [leftStartTime, leftEndTime] = [
        +toDate(intervalLeft.start, options?.in),
        +toDate(intervalLeft.end, options?.in)
    ].sort((a, b)=>a - b);
    const [rightStartTime, rightEndTime] = [
        +toDate(intervalRight.start, options?.in),
        +toDate(intervalRight.end, options?.in)
    ].sort((a, b)=>a - b);
    if (options?.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
const __TURBOPACK__default__export__ = areIntervalsOverlapping;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/clamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './max.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './min.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function clamp(date, interval, options) {
    const [date_, start, end] = normalizeDates(options?.in, date, interval.start, interval.end);
    return min([
        max([
            date_,
            start
        ], options),
        end
    ], options);
}
const __TURBOPACK__default__export__ = clamp;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/closestIndexTo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closestIndexTo",
    ()=>closestIndexTo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function closestIndexTo(dateToCompare, dates) {
    // [TODO] It would be better to return -1 here rather than undefined, as this
    // is how JS behaves, but it would be a breaking change, so we need
    // to consider it for v4.
    const timeToCompare = +toDate(dateToCompare);
    if (isNaN(timeToCompare)) return NaN;
    let result;
    let minDistance;
    dates.forEach((date, index)=>{
        const date_ = toDate(date);
        if (isNaN(+date_)) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        const distance = Math.abs(timeToCompare - +date_);
        if (result == null || distance < minDistance) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}
const __TURBOPACK__default__export__ = closestIndexTo;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/closestTo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closestTo",
    ()=>closestTo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestIndexTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/closestIndexTo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
;
function closestTo(dateToCompare, dates, options) {
    const [dateToCompare_, ...dates_] = normalizeDates(options?.in, dateToCompare, ...dates);
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestIndexTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestIndexTo"])(dateToCompare_, dates_);
    if (typeof index === "number" && isNaN(index)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(dateToCompare_, NaN);
    if (index !== undefined) return dates_[index];
}
const __TURBOPACK__default__export__ = closestTo;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareAsc",
    ()=>compareAsc,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function compareAsc(dateLeft, dateRight) {
    const diff = +toDate(dateLeft) - +toDate(dateRight);
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
const __TURBOPACK__default__export__ = compareAsc;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareDesc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareDesc",
    ()=>compareDesc,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function compareDesc(dateLeft, dateRight) {
    const diff = +toDate(dateLeft) - +toDate(dateRight);
    if (diff > 0) return -1;
    else if (diff < 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
const __TURBOPACK__default__export__ = compareDesc;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructNow",
    ()=>constructNow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function constructNow(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(date, Date.now());
}
const __TURBOPACK__default__export__ = constructNow;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/daysToWeeks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "daysToWeeks",
    ()=>daysToWeeks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function daysToWeeks(days) {
    const result = Math.trunc(days / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysInWeek"]);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = daysToWeeks;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameDay",
    ()=>isSameDay
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function isSameDay(laterDate, earlierDate, options) {
    const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
    return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
const __TURBOPACK__default__export__ = isSameDay;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInBusinessDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInBusinessDays",
    ()=>differenceInBusinessDays
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWeekend.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
function differenceInBusinessDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    if (!isValid(laterDate_) || !isValid(earlierDate_)) return NaN;
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_);
    const sign = diff < 0 ? -1 : 1;
    const weeks = Math.trunc(diff / 7);
    let result = weeks * 5;
    let movingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(earlierDate_, weeks * 7);
    // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(laterDate_, movingDate)){
        // sign is used to account for both negative and positive differences
        result += isWeekend(movingDate, options) ? 0 : sign;
        movingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(movingDate, sign);
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = differenceInBusinessDays;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarISOWeekYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarISOWeekYears",
    ()=>differenceInCalendarISOWeekYears
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
;
;
function differenceInCalendarISOWeekYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(laterDate_, options) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(earlierDate_, options);
}
const __TURBOPACK__default__export__ = differenceInCalendarISOWeekYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarISOWeeks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarISOWeeks",
    ()=>differenceInCalendarISOWeeks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const startOfISOWeekLeft = startOfISOWeek(laterDate_);
    const startOfISOWeekRight = startOfISOWeek(earlierDate_);
    const timestampLeft = +startOfISOWeekLeft - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(startOfISOWeekLeft);
    const timestampRight = +startOfISOWeekRight - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(startOfISOWeekRight);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarISOWeeks;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarMonths.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarMonths",
    ()=>differenceInCalendarMonths
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
const __TURBOPACK__default__export__ = differenceInCalendarMonths;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getQuarter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getQuarter",
    ()=>getQuarter
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getQuarter(date, options) {
    const _date = toDate(date, options?.in);
    const quarter = Math.trunc(_date.getMonth() / 3) + 1;
    return quarter;
}
const __TURBOPACK__default__export__ = getQuarter;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarQuarters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarQuarters",
    ()=>differenceInCalendarQuarters
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getQuarter.js [app-ssr] (ecmascript)");
;
;
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const quartersDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQuarter"])(laterDate_) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQuarter"])(earlierDate_);
    return yearsDiff * 4 + quartersDiff;
}
const __TURBOPACK__default__export__ = differenceInCalendarQuarters;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarWeeks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarWeeks",
    ()=>differenceInCalendarWeeks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const laterStartOfWeek = startOfWeek(laterDate_, options);
    const earlierStartOfWeek = startOfWeek(earlierDate_, options);
    const laterTimestamp = +laterStartOfWeek - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfWeek);
    const earlierTimestamp = +earlierStartOfWeek - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfWeek);
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarWeeks;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarYears",
    ()=>differenceInCalendarYears
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function differenceInCalendarYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
const __TURBOPACK__default__export__ = differenceInCalendarYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInDays",
    ()=>differenceInDays
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
;
;
function differenceInDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const sign = compareLocalAsc(laterDate_, earlierDate_);
    const difference = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_));
    laterDate_.setDate(laterDate_.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
    const result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
    const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
    if (diff < 0) return -1;
    if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
const __TURBOPACK__default__export__ = differenceInDays;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoundingMethod",
    ()=>getRoundingMethod
]);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInHours.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInHours",
    ()=>differenceInHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
;
;
function differenceInHours(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const diff = (+laterDate_ - +earlierDate_) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInHour"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInHours;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInISOWeekYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInISOWeekYears",
    ()=>differenceInISOWeekYears
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarISOWeekYears.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './subISOWeekYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function differenceInISOWeekYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    const sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate_, earlierDate_);
    const diff = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarISOWeekYears"])(laterDate_, earlierDate_, options));
    const adjustedDate = subISOWeekYears(laterDate_, sign * diff, options);
    const isLastISOWeekYearNotFull = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(adjustedDate, earlierDate_) === -sign);
    const result = sign * (diff - isLastISOWeekYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = differenceInISOWeekYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInMilliseconds",
    ()=>differenceInMilliseconds
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function differenceInMilliseconds(laterDate, earlierDate) {
    return +toDate(laterDate) - +toDate(earlierDate);
}
const __TURBOPACK__default__export__ = differenceInMilliseconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMinutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInMinutes",
    ()=>differenceInMinutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMilliseconds.js [app-ssr] (ecmascript)");
;
;
;
function differenceInMinutes(dateLeft, dateRight, options) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMilliseconds"])(dateLeft, dateRight) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInMinutes;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfDay",
    ()=>endOfDay
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfDay(date, options) {
    const _date = toDate(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfDay;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfMonth",
    ()=>endOfMonth
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfMonth(date, options) {
    const _date = toDate(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLastDayOfMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isLastDayOfMonth",
    ()=>isLastDayOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function isLastDayOfMonth(date, options) {
    const _date = toDate(date, options?.in);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDay"])(_date, options) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(_date, options);
}
const __TURBOPACK__default__export__ = isLastDayOfMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMonths.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInMonths",
    ()=>differenceInMonths
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLastDayOfMonth.js [app-ssr] (ecmascript)");
;
;
;
;
function differenceInMonths(laterDate, earlierDate, options) {
    const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
    const sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(workingLaterDate, earlierDate_);
    const difference = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(workingLaterDate, earlierDate_));
    if (difference < 1) return 0;
    if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
    workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
    let isLastMonthNotFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(workingLaterDate, earlierDate_) === -sign;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastDayOfMonth"])(laterDate_) && difference === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate_, earlierDate_) === 1) {
        isLastMonthNotFull = false;
    }
    const result = sign * (difference - +isLastMonthNotFull);
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = differenceInMonths;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInQuarters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInQuarters",
    ()=>differenceInQuarters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMonths.js [app-ssr] (ecmascript)");
;
;
function differenceInQuarters(laterDate, earlierDate, options) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMonths"])(laterDate, earlierDate, options) / 3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInQuarters;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInSeconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInSeconds",
    ()=>differenceInSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMilliseconds.js [app-ssr] (ecmascript)");
;
;
function differenceInSeconds(laterDate, earlierDate, options) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMilliseconds"])(laterDate, earlierDate) / 1000;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInSeconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInWeeks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInWeeks",
    ()=>differenceInWeeks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)");
;
;
function differenceInWeeks(laterDate, earlierDate, options) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"])(laterDate, earlierDate, options) / 7;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInWeeks;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInYears.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInYears",
    ()=>differenceInYears
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarYears.js [app-ssr] (ecmascript)");
;
;
;
function differenceInYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    // -1 if the left date is earlier than the right date
    // 2023-12-31 - 2024-01-01 = -1
    const sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate_, earlierDate_);
    // First calculate the difference in calendar years
    // 2024-01-01 - 2023-12-31 = 1 year
    const diff = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(laterDate_, earlierDate_));
    // Now we need to calculate if the difference is full. To do that we set
    // both dates to the same year and check if the both date's month and day
    // form a full year.
    laterDate_.setFullYear(1584);
    earlierDate_.setFullYear(1584);
    // For it to be true, when the later date is indeed later than the earlier date
    // (2026-02-01 - 2023-12-10 = 3 years), the difference is full if
    // the normalized later date is also later than the normalized earlier date.
    // In our example, 1584-02-01 is earlier than 1584-12-10, so the difference
    // is partial, hence we need to subtract 1 from the difference 3 - 1 = 2.
    const partial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate_, earlierDate_) === -sign;
    const result = sign * (diff - +partial);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = differenceInYears;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachDayOfInterval",
    ()=>eachDayOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
function eachDayOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setDate(date.getDate() + step);
        date.setHours(0, 0, 0, 0);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachDayOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachHourOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachHourOfInterval",
    ()=>eachHourOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
function eachHourOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setMinutes(0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setHours(date.getHours() + step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachHourOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachMinuteOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachMinuteOfInterval",
    ()=>eachMinuteOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
;
function eachMinuteOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    // Set to the start of the minute
    start.setSeconds(0, 0);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    let date = reversed ? end : start;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMinutes"])(date, step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachMinuteOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachMonthOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachMonthOfInterval",
    ()=>eachMonthOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
function eachMonthOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setDate(1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setMonth(date.getMonth() + step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachMonthOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachQuarterOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachQuarterOfInterval",
    ()=>eachQuarterOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addQuarters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function eachQuarterOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +startOfQuarter(start) : +startOfQuarter(end);
    let date = reversed ? startOfQuarter(end) : startOfQuarter(start);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addQuarters"])(date, step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachQuarterOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachWeekOfInterval",
    ()=>eachWeekOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function eachWeekOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const startDateWeek = reversed ? startOfWeek(end, options) : startOfWeek(start, options);
    const endDateWeek = reversed ? startOfWeek(start, options) : startOfWeek(end, options);
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    const endTime = +endDateWeek.getTime();
    let currentDate = startDateWeek;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        currentDate.setHours(0);
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, currentDate));
        currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, step);
        currentDate.setHours(15);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachWeekOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachWeekendOfInterval",
    ()=>eachWeekendOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isWeekend.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function eachWeekendOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    const dateInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
        start,
        end
    }, options);
    const weekends = [];
    let index = 0;
    while(index < dateInterval.length){
        const date = dateInterval[index++];
        if (isWeekend(date)) weekends.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
    }
    return weekends;
}
const __TURBOPACK__default__export__ = eachWeekendOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachWeekendOfMonth",
    ()=>eachWeekendOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function eachWeekendOfMonth(date, options) {
    const start = startOfMonth(date, options);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(date, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekendOfInterval"])({
        start,
        end
    }, options);
}
const __TURBOPACK__default__export__ = eachWeekendOfMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfYear",
    ()=>endOfYear
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfYear(date, options) {
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    _date.setFullYear(year + 1, 0, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachWeekendOfYear",
    ()=>eachWeekendOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfYear.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function eachWeekendOfYear(date, options) {
    const start = startOfYear(date, options);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfYear"])(date, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekendOfInterval"])({
        start,
        end
    }, options);
}
const __TURBOPACK__default__export__ = eachWeekendOfYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachYearOfInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachYearOfInterval",
    ()=>eachYearOfInterval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
;
function eachYearOfInterval(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setMonth(0, 1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setFullYear(date.getFullYear() + step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachYearOfInterval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDecade.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfDecade",
    ()=>endOfDecade
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfDecade(date, options) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    const decade = 9 + Math.floor(year / 10) * 10;
    _date.setFullYear(decade, 11, 31);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfDecade;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfHour.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfHour",
    ()=>endOfHour
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfHour(date, options) {
    const _date = toDate(date, options?.in);
    _date.setMinutes(59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfHour;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfWeek",
    ()=>endOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function endOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = toDate(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setDate(_date.getDate() + diff);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfWeek;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfISOWeek",
    ()=>endOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
;
function endOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = endOfISOWeek;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfISOWeekYear",
    ()=>endOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function endOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const _date = startOfISOWeek(fourthOfJanuaryOfNextYear, options);
    _date.setMilliseconds(_date.getMilliseconds() - 1);
    return _date;
}
const __TURBOPACK__default__export__ = endOfISOWeekYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMinute.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfMinute",
    ()=>endOfMinute
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfMinute(date, options) {
    const _date = toDate(date, options?.in);
    _date.setSeconds(59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfMinute;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfQuarter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfQuarter",
    ()=>endOfQuarter
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfQuarter(date, options) {
    const _date = toDate(date, options?.in);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3 + 3;
    _date.setMonth(month, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfQuarter;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfSecond.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfSecond",
    ()=>endOfSecond
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function endOfSecond(date, options) {
    const _date = toDate(date, options?.in);
    _date.setMilliseconds(999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfSecond;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfToday.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfToday",
    ()=>endOfToday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)");
;
function endOfToday(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDay"])(Date.now(), options);
}
const __TURBOPACK__default__export__ = endOfToday;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfTomorrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfTomorrow",
    ()=>endOfTomorrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)");
;
function endOfTomorrow(options) {
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"])(options?.in);
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"])(options?.in);
    date.setFullYear(year, month, day + 1);
    date.setHours(23, 59, 59, 999);
    return options?.in ? options.in(date) : date;
}
const __TURBOPACK__default__export__ = endOfTomorrow;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfYesterday.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfYesterday",
    ()=>endOfYesterday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)");
;
;
function endOfYesterday(options) {
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"])(options?.in);
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in, 0);
    date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
const __TURBOPACK__default__export__ = endOfYesterday;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"],
    "formatDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"],
    "formatters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/format/longFormatters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistance",
    ()=>formatDistance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInSeconds.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function formatDistance(laterDate, earlierDate, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const seconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"])(earlierDate_, laterDate_);
    const offsetInSeconds = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierDate_) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterDate_)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) {
                return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            } else if (seconds < 10) {
                return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            } else if (seconds < 20) {
                return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            } else if (seconds < 40) {
                return locale.formatDistance("halfAMinute", 0, localizeOptions);
            } else if (seconds < 60) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", 1, localizeOptions);
            }
        } else {
            if (minutes === 0) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", minutes, localizeOptions);
            }
        }
    // 2 mins up to 0.75 hrs
    } else if (minutes < 45) {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
    // 0.75 hrs up to 1.5 hrs
    } else if (minutes < 90) {
        return locale.formatDistance("aboutXHours", 1, localizeOptions);
    // 1.5 hrs up to 24 hrs
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInDay"]) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) {
        return locale.formatDistance("xDays", 1, localizeOptions);
    // 1.75 days up to 30 days
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"]) {
        const days = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInDay"]);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"] * 2) {
        months = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"]);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMonths"])(earlierDate_, laterDate_);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"]);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance("aboutXYears", years, localizeOptions);
        // N years 3 months up to N years 9 months
        } else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance("overXYears", years, localizeOptions);
        // N years 9 months up to N year 12 months
        } else {
            return locale.formatDistance("almostXYears", years + 1, localizeOptions);
        }
    }
}
const __TURBOPACK__default__export__ = formatDistance;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceStrict.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistanceStrict",
    ()=>formatDistanceStrict
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getRoundingMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function formatDistanceStrict(laterDate, earlierDate, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"])(laterDate, earlierDate);
    if (isNaN(comparison)) {
        throw new RangeError("Invalid time value");
    }
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const roundingMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod ?? "round");
    const milliseconds = earlierDate_.getTime() - laterDate_.getTime();
    const minutes = milliseconds / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"];
    const timezoneOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierDate_) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterDate_);
    // Use DST-normalized difference in minutes for years, months and days;
    // use regular difference in minutes for hours, minutes and seconds.
    const dstNormalizedMinutes = (milliseconds - timezoneOffset) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"];
    const defaultUnit = options?.unit;
    let unit;
    if (!defaultUnit) {
        if (minutes < 1) {
            unit = "second";
        } else if (minutes < 60) {
            unit = "minute";
        } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInDay"]) {
            unit = "hour";
        } else if (dstNormalizedMinutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"]) {
            unit = "day";
        } else if (dstNormalizedMinutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInYear"]) {
            unit = "month";
        } else {
            unit = "year";
        }
    } else {
        unit = defaultUnit;
    }
    // 0 up to 60 seconds
    if (unit === "second") {
        const seconds = roundingMethod(milliseconds / 1000);
        return locale.formatDistance("xSeconds", seconds, localizeOptions);
    // 1 up to 60 mins
    } else if (unit === "minute") {
        const roundedMinutes = roundingMethod(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
    // 1 up to 24 hours
    } else if (unit === "hour") {
        const hours = roundingMethod(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions);
    // 1 up to 30 days
    } else if (unit === "day") {
        const days = roundingMethod(dstNormalizedMinutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInDay"]);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 up to 12 months
    } else if (unit === "month") {
        const months = roundingMethod(dstNormalizedMinutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInMonth"]);
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
    // 1 year up to max Date
    } else {
        const years = roundingMethod(dstNormalizedMinutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInYear"]);
        return locale.formatDistance("xYears", years, localizeOptions);
    }
}
const __TURBOPACK__default__export__ = formatDistanceStrict;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceToNow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistanceToNow",
    ()=>formatDistanceToNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistance.js [app-ssr] (ecmascript)");
;
;
function formatDistanceToNow(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"])(date), options);
}
const __TURBOPACK__default__export__ = formatDistanceToNow;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceToNowStrict.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistanceToNowStrict",
    ()=>formatDistanceToNowStrict
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceStrict.js [app-ssr] (ecmascript)");
;
;
function formatDistanceToNowStrict(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceStrict"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"])(date), options);
}
const __TURBOPACK__default__export__ = formatDistanceToNowStrict;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDuration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDuration",
    ()=>formatDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
;
;
/**
 * The {@link formatDuration} function options.
 */ const defaultFormat = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds"
];
function formatDuration(duration, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const format = options?.format ?? defaultFormat;
    const zero = options?.zero ?? false;
    const delimiter = options?.delimiter ?? " ";
    if (!locale.formatDistance) {
        return "";
    }
    const result = format.reduce((acc, unit)=>{
        const token = `x${unit.replace(/(^.)/, (m)=>m.toUpperCase())}`;
        const value = duration[unit];
        if (value !== undefined && (zero || duration[unit])) {
            return acc.concat(locale.formatDistance(token, value));
        }
        return acc;
    }, []).join(delimiter);
    return result;
}
const __TURBOPACK__default__export__ = formatDuration;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatISO",
    ()=>formatISO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function formatISO(date, options) {
    const date_ = toDate(date, options?.in);
    if (isNaN(+date_)) {
        throw new RangeError("Invalid time value");
    }
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    let tzOffset = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getDate(), 2);
        const month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMonth() + 1, 2);
        const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        // Add the timezone.
        const offset = date_.getTimezoneOffset();
        if (offset !== 0) {
            const absoluteOffset = Math.abs(offset);
            const hourOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absoluteOffset / 60), 2);
            const minuteOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absoluteOffset % 60, 2);
            // If less than 0, the sign is +, because it is ahead of time.
            const sign = offset < 0 ? "+" : "-";
            tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
        } else {
            tzOffset = "Z";
        }
        const hour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getHours(), 2);
        const minute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMinutes(), 2);
        const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getSeconds(), 2);
        // If there's also date, separate it with time with 'T'
        const separator = result === "" ? "" : "T";
        // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        const time = [
            hour,
            minute,
            second
        ].join(timeDelimiter);
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${time}${tzOffset}`;
    }
    return result;
}
const __TURBOPACK__default__export__ = formatISO;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISO9075.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatISO9075",
    ()=>formatISO9075
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function formatISO9075(date, options) {
    const date_ = toDate(date, options?.in);
    if (!isValid(date_)) {
        throw new RangeError("Invalid time value");
    }
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getDate(), 2);
        const month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMonth() + 1, 2);
        const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        const hour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getHours(), 2);
        const minute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMinutes(), 2);
        const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getSeconds(), 2);
        // If there's also date, separate it with time with a space
        const separator = result === "" ? "" : " ";
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
    }
    return result;
}
const __TURBOPACK__default__export__ = formatISO9075;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISODuration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatISODuration",
    ()=>formatISODuration
]);
function formatISODuration(duration) {
    const { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
}
const __TURBOPACK__default__export__ = formatISODuration;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRFC3339.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatRFC3339",
    ()=>formatRFC3339
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function formatRFC3339(date, options) {
    const date_ = toDate(date, options?.in);
    if (!isValid(date_)) {
        throw new RangeError("Invalid time value");
    }
    const fractionDigits = options?.fractionDigits ?? 0;
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getDate(), 2);
    const month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMonth() + 1, 2);
    const year = date_.getFullYear();
    const hour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getHours(), 2);
    const minute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getMinutes(), 2);
    const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date_.getSeconds(), 2);
    let fractionalSecond = "";
    if (fractionDigits > 0) {
        const milliseconds = date_.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = "." + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, fractionDigits);
    }
    let offset = "";
    const tzOffset = date_.getTimezoneOffset();
    if (tzOffset !== 0) {
        const absoluteOffset = Math.abs(tzOffset);
        const hourOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absoluteOffset / 60), 2);
        const minuteOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absoluteOffset % 60, 2);
        // If less than 0, the sign is +, because it is ahead of time.
        const sign = tzOffset < 0 ? "+" : "-";
        offset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
        offset = "Z";
    }
    return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}
const __TURBOPACK__default__export__ = formatRFC3339;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRFC7231.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatRFC7231",
    ()=>formatRFC7231
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function formatRFC7231(date) {
    const _date = toDate(date);
    if (!isValid(_date)) {
        throw new RangeError("Invalid time value");
    }
    const dayName = days[_date.getUTCDay()];
    const dayOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(_date.getUTCDate(), 2);
    const monthName = months[_date.getUTCMonth()];
    const year = _date.getUTCFullYear();
    const hour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(_date.getUTCHours(), 2);
    const minute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(_date.getUTCMinutes(), 2);
    const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(_date.getUTCSeconds(), 2);
    // Result variables.
    return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}
const __TURBOPACK__default__export__ = formatRFC7231;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatRelative",
    ()=>formatRelative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
function formatRelative(date, baseDate, options) {
    const [date_, baseDate_] = normalizeDates(options?.in, date, baseDate);
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(date_, baseDate_);
    if (isNaN(diff)) {
        throw new RangeError("Invalid time value");
    }
    let token;
    if (diff < -6) {
        token = "other";
    } else if (diff < -1) {
        token = "lastWeek";
    } else if (diff < 0) {
        token = "yesterday";
    } else if (diff < 1) {
        token = "today";
    } else if (diff < 2) {
        token = "tomorrow";
    } else if (diff < 7) {
        token = "nextWeek";
    } else {
        token = "other";
    }
    const formatStr = locale.formatRelative(token, date_, baseDate_, {
        locale,
        weekStartsOn
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date_, formatStr, {
        locale,
        weekStartsOn
    });
}
const __TURBOPACK__default__export__ = formatRelative;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/fromUnixTime.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromUnixTime",
    ()=>fromUnixTime
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function fromUnixTime(unixTime, options) {
    return toDate(unixTime * 1000, options?.in);
}
const __TURBOPACK__default__export__ = fromUnixTime;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDate",
    ()=>getDate
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getDate(date, options) {
    return toDate(date, options?.in).getDate();
}
const __TURBOPACK__default__export__ = getDate;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDay",
    ()=>getDay
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getDay(date, options) {
    return toDate(date, options?.in).getDay();
}
const __TURBOPACK__default__export__ = getDay;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDaysInMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDaysInMonth",
    ()=>getDaysInMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function getDaysInMonth(date, options) {
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    const monthIndex = _date.getMonth();
    const lastDayOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
const __TURBOPACK__default__export__ = getDaysInMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLeapYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isLeapYear",
    ()=>isLeapYear
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isLeapYear(date, options) {
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
const __TURBOPACK__default__export__ = isLeapYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDaysInYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDaysInYear",
    ()=>getDaysInYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLeapYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLeapYear.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function getDaysInYear(date, options) {
    const _date = toDate(date, options?.in);
    if (Number.isNaN(+_date)) return NaN;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLeapYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLeapYear"])(_date) ? 366 : 365;
}
const __TURBOPACK__default__export__ = getDaysInYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDecade.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDecade",
    ()=>getDecade
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getDecade(date, options) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = toDate(date, options?.in);
    const year = _date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    return decade;
}
const __TURBOPACK__default__export__ = getDecade;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDefaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDefaultOptions",
    ()=>getDefaultOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
;
function getDefaultOptions() {
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])());
}
const __TURBOPACK__default__export__ = getDefaultOptions;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getHours.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getHours",
    ()=>getHours
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getHours(date, options) {
    return toDate(date, options?.in).getHours();
}
const __TURBOPACK__default__export__ = getHours;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISODay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISODay",
    ()=>getISODay
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getISODay(date, options) {
    const day = toDate(date, options?.in).getDay();
    return day === 0 ? 7 : day;
}
const __TURBOPACK__default__export__ = getISODay;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeeksInYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeeksInYear",
    ()=>getISOWeeksInYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function getISOWeeksInYear(date, options) {
    const thisYear = startOfISOWeekYear(date, options);
    const nextYear = startOfISOWeekYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWeeks"])(thisYear, 60));
    const diff = +nextYear - +thisYear;
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]);
}
const __TURBOPACK__default__export__ = getISOWeeksInYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMilliseconds",
    ()=>getMilliseconds
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getMilliseconds(date) {
    return toDate(date).getMilliseconds();
}
const __TURBOPACK__default__export__ = getMilliseconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMinutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMinutes",
    ()=>getMinutes
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getMinutes(date, options) {
    return toDate(date, options?.in).getMinutes();
}
const __TURBOPACK__default__export__ = getMinutes;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMonth",
    ()=>getMonth
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getMonth(date, options) {
    return toDate(date, options?.in).getMonth();
}
const __TURBOPACK__default__export__ = getMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getOverlappingDaysInIntervals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getOverlappingDaysInIntervals",
    ()=>getOverlappingDaysInIntervals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
    const [leftStart, leftEnd] = [
        +toDate(intervalLeft.start),
        +toDate(intervalLeft.end)
    ].sort((a, b)=>a - b);
    const [rightStart, rightEnd] = [
        +toDate(intervalRight.start),
        +toDate(intervalRight.end)
    ].sort((a, b)=>a - b);
    // Prevent NaN result if intervals don't overlap at all.
    const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
    if (!isOverlapping) return 0;
    // Remove the timezone offset to negate the DST effect on calculations.
    const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
    const left = overlapLeft - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(overlapLeft);
    const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
    const right = overlapRight - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(overlapRight);
    // Ceil the number to include partial days too.
    return Math.ceil((right - left) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = getOverlappingDaysInIntervals;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getSeconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSeconds",
    ()=>getSeconds
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getSeconds(date) {
    return toDate(date).getSeconds();
}
const __TURBOPACK__default__export__ = getSeconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getTime.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTime",
    ()=>getTime
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getTime(date) {
    return +toDate(date);
}
const __TURBOPACK__default__export__ = getTime;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getUnixTime.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUnixTime",
    ()=>getUnixTime
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getUnixTime(date) {
    return Math.trunc(+toDate(date) / 1000);
}
const __TURBOPACK__default__export__ = getUnixTime;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeekOfMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekOfMonth",
    ()=>getWeekOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDay.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './startOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
function getWeekOfMonth(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const currentDayOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(toDate(date, options?.in));
    if (isNaN(currentDayOfMonth)) return NaN;
    const startWeekDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDay"])(startOfMonth(date, options));
    let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
const __TURBOPACK__default__export__ = getWeekOfMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeeksInMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeeksInMonth",
    ()=>getWeeksInMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarWeeks.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './lastDayOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function getWeeksInMonth(date, options) {
    const contextDate = toDate(date, options?.in);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarWeeks"])(lastDayOfMonth(contextDate, options), startOfMonth(contextDate, options), options) + 1;
}
const __TURBOPACK__default__export__ = getWeeksInMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getYear",
    ()=>getYear
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getYear(date, options) {
    return toDate(date, options?.in).getFullYear();
}
const __TURBOPACK__default__export__ = getYear;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hoursToMilliseconds",
    ()=>hoursToMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function hoursToMilliseconds(hours) {
    return Math.trunc(hours * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInHour"]);
}
const __TURBOPACK__default__export__ = hoursToMilliseconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToMinutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hoursToMinutes",
    ()=>hoursToMinutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function hoursToMinutes(hours) {
    return Math.trunc(hours * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minutesInHour"]);
}
const __TURBOPACK__default__export__ = hoursToMinutes;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToSeconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hoursToSeconds",
    ()=>hoursToSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function hoursToSeconds(hours) {
    return Math.trunc(hours * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInHour"]);
}
const __TURBOPACK__default__export__ = hoursToSeconds;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/interval.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "interval",
    ()=>interval
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function interval(start, end, options) {
    const [_start, _end] = normalizeDates(options?.in, start, end);
    if (isNaN(+_start)) throw new TypeError("Start date is invalid");
    if (isNaN(+_end)) throw new TypeError("End date is invalid");
    if (options?.assertPositive && +_start > +_end) throw new TypeError("End date must be after start date");
    return {
        start: _start,
        end: _end
    };
}
const __TURBOPACK__default__export__ = interval;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intervalToDuration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "intervalToDuration",
    ()=>intervalToDuration
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInHours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInSeconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInYears.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function intervalToDuration(interval, options) {
    const { start, end } = normalizeInterval(options?.in, interval);
    const duration = {};
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInYears"])(end, start);
    if (years) duration.years = years;
    const remainingMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(start, {
        years: duration.years
    });
    const months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMonths"])(end, remainingMonths);
    if (months) duration.months = months;
    const remainingDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(remainingMonths, {
        months: duration.months
    });
    const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"])(end, remainingDays);
    if (days) duration.days = days;
    const remainingHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(remainingDays, {
        days: duration.days
    });
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInHours"])(end, remainingHours);
    if (hours) duration.hours = hours;
    const remainingMinutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(remainingHours, {
        hours: duration.hours
    });
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMinutes"])(end, remainingMinutes);
    if (minutes) duration.minutes = minutes;
    const remainingSeconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(remainingMinutes, {
        minutes: duration.minutes
    });
    const seconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"])(end, remainingSeconds);
    if (seconds) duration.seconds = seconds;
    return duration;
}
const __TURBOPACK__default__export__ = intervalToDuration;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intlFormat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "intlFormat",
    ()=>intlFormat
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function intlFormat(date, formatOrLocale, localeOptions) {
    let formatOptions;
    if (isFormatOptions(formatOrLocale)) {
        formatOptions = formatOrLocale;
    } else {
        localeOptions = formatOrLocale;
    }
    return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(toDate(date));
}
function isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}
const __TURBOPACK__default__export__ = intlFormat;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intlFormatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "intlFormatDistance",
    ()=>intlFormatDistance
]);
(()=>{
    const e = new Error("Cannot find module './_lib/normalizeDates.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarQuarters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInHours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInSeconds.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function intlFormatDistance(laterDate, earlierDate, options) {
    let value = 0;
    let unit;
    const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
    if (!options?.unit) {
        // Get the unit based on diffInSeconds calculations if no unit is specified
        const diffInSeconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"])(laterDate_, earlierDate_); // The smallest unit
        if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInMinute"]) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"])(laterDate_, earlierDate_);
            unit = "second";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInHour"]) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMinutes"])(laterDate_, earlierDate_);
            unit = "minute";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInDay"] && Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_)) < 1) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInHours"])(laterDate_, earlierDate_);
            unit = "hour";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInWeek"] && (value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_)) && Math.abs(value) < 7) {
            unit = "day";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInMonth"]) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarWeeks"])(laterDate_, earlierDate_);
            unit = "week";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInQuarter"]) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(laterDate_, earlierDate_);
            unit = "month";
        } else if (Math.abs(diffInSeconds) < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsInYear"]) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(laterDate_, earlierDate_) < 4) {
                // To filter out cases that are less than a year but match 4 quarters
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(laterDate_, earlierDate_);
                unit = "quarter";
            } else {
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(laterDate_, earlierDate_);
                unit = "year";
            }
        } else {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(laterDate_, earlierDate_);
            unit = "year";
        }
    } else {
        // Get the value if unit is specified
        unit = options?.unit;
        if (unit === "second") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"])(laterDate_, earlierDate_);
        } else if (unit === "minute") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMinutes"])(laterDate_, earlierDate_);
        } else if (unit === "hour") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInHours"])(laterDate_, earlierDate_);
        } else if (unit === "day") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_);
        } else if (unit === "week") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarWeeks"])(laterDate_, earlierDate_);
        } else if (unit === "month") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(laterDate_, earlierDate_);
        } else if (unit === "quarter") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(laterDate_, earlierDate_);
        } else if (unit === "year") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(laterDate_, earlierDate_);
        }
    }
    const rtf = new Intl.RelativeTimeFormat(options?.locale, {
        numeric: "auto",
        ...options
    });
    return rtf.format(value, unit);
}
const __TURBOPACK__default__export__ = intlFormatDistance;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isAfter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isAfter",
    ()=>isAfter
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isAfter(date, dateToCompare) {
    return +toDate(date) > +toDate(dateToCompare);
}
const __TURBOPACK__default__export__ = isAfter;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isBefore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBefore",
    ()=>isBefore
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isBefore(date, dateToCompare) {
    return +toDate(date) < +toDate(dateToCompare);
}
const __TURBOPACK__default__export__ = isBefore;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isEqual.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isEqual",
    ()=>isEqual
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isEqual(leftDate, rightDate) {
    return +toDate(leftDate) === +toDate(rightDate);
}
const __TURBOPACK__default__export__ = isEqual;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isExists.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year - The year of the date to check
 * @param month - The month of the date to check
 * @param day - The day of the date to check
 *
 * @returns `true` if the date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isExists",
    ()=>isExists
]);
function isExists(year, month, day) {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
const __TURBOPACK__default__export__ = isExists;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFirstDayOfMonth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isFirstDayOfMonth",
    ()=>isFirstDayOfMonth
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isFirstDayOfMonth(date, options) {
    return toDate(date, options?.in).getDate() === 1;
}
const __TURBOPACK__default__export__ = isFirstDayOfMonth;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFriday.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isFriday",
    ()=>isFriday
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isFriday(date, options) {
    return toDate(date, options?.in).getDay() === 5;
}
const __TURBOPACK__default__export__ = isFriday;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFuture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isFuture",
    ()=>isFuture
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isFuture(date) {
    return +toDate(date) > Date.now();
}
const __TURBOPACK__default__export__ = isFuture;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isMatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isMatch",
    ()=>isMatch
]);
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parse.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function isMatch(dateStr, formatStr, options) {
    return isValid(parse(dateStr, formatStr, new Date(), options));
}
const __TURBOPACK__default__export__ = isMatch;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isMonday.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isMonday",
    ()=>isMonday
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isMonday(date, options) {
    return toDate(date, options?.in).getDay() === 1;
}
const __TURBOPACK__default__export__ = isMonday;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isPast.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isPast",
    ()=>isPast
]);
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isPast(date) {
    return +toDate(date) < Date.now();
}
const __TURBOPACK__default__export__ = isPast;
}),
"[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"],
    "addBusinessDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBusinessDays"],
    "addDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"],
    "addHours",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addHours"],
    "addISOWeekYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addISOWeekYears"],
    "addMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMilliseconds"],
    "addMinutes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMinutes"],
    "addMonths",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"],
    "addQuarters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addQuarters"],
    "addSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSeconds"],
    "addWeeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWeeks"],
    "addYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addYears"],
    "areIntervalsOverlapping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$areIntervalsOverlapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areIntervalsOverlapping"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"],
    "closestIndexTo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestIndexTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestIndexTo"],
    "closestTo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestTo"],
    "compareAsc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareAsc"],
    "compareDesc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareDesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareDesc"],
    "constructFrom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"],
    "constructNow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructNow"],
    "daysToWeeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$daysToWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysToWeeks"],
    "differenceInBusinessDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInBusinessDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInBusinessDays"],
    "differenceInCalendarDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"],
    "differenceInCalendarISOWeekYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarISOWeekYears"],
    "differenceInCalendarISOWeeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarISOWeeks"],
    "differenceInCalendarMonths",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"],
    "differenceInCalendarQuarters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"],
    "differenceInCalendarWeeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarWeeks"],
    "differenceInCalendarYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarYears"],
    "differenceInDays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"],
    "differenceInHours",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInHours"],
    "differenceInISOWeekYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInISOWeekYears"],
    "differenceInMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMilliseconds"],
    "differenceInMinutes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMinutes"],
    "differenceInMonths",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMonths"],
    "differenceInQuarters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInQuarters"],
    "differenceInSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInSeconds"],
    "differenceInWeeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInWeeks"],
    "differenceInYears",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInYears"],
    "eachDayOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachDayOfInterval"],
    "eachHourOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachHourOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachHourOfInterval"],
    "eachMinuteOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachMinuteOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachMinuteOfInterval"],
    "eachMonthOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachMonthOfInterval"],
    "eachQuarterOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachQuarterOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachQuarterOfInterval"],
    "eachWeekOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekOfInterval"],
    "eachWeekendOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekendOfInterval"],
    "eachWeekendOfMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekendOfMonth"],
    "eachWeekendOfYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachWeekendOfYear"],
    "eachYearOfInterval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachYearOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachYearOfInterval"],
    "endOfDay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDay"],
    "endOfDecade",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDecade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDecade"],
    "endOfHour",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfHour$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfHour"],
    "endOfISOWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfISOWeek"],
    "endOfISOWeekYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfISOWeekYear"],
    "endOfMinute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMinute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMinute"],
    "endOfMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"],
    "endOfQuarter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfQuarter"],
    "endOfSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfSecond$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfSecond"],
    "endOfToday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfToday"],
    "endOfTomorrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfTomorrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfTomorrow"],
    "endOfWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"],
    "endOfYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfYear"],
    "endOfYesterday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfYesterday"],
    "format",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"],
    "formatDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"],
    "formatDistance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    "formatDistanceStrict",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceStrict"],
    "formatDistanceToNow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"],
    "formatDistanceToNowStrict",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNowStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNowStrict"],
    "formatDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"],
    "formatISO",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatISO"],
    "formatISO9075",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISO9075$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatISO9075"],
    "formatISODuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISODuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatISODuration"],
    "formatRFC3339",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRFC3339$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRFC3339"],
    "formatRFC7231",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRFC7231$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRFC7231"],
    "formatRelative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    "formatters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"],
    "fromUnixTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$fromUnixTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromUnixTime"],
    "getDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"],
    "getDay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDay"],
    "getDayOfYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfYear"],
    "getDaysInMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"],
    "getDaysInYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDaysInYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInYear"],
    "getDecade",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDecade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecade"],
    "getDefaultOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDefaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"],
    "getHours",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"],
    "getISODay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISODay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISODay"],
    "getISOWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeek"],
    "getISOWeekYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"],
    "getISOWeeksInYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeeksInYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeeksInYear"],
    "getMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMilliseconds"],
    "getMinutes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"],
    "getMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"],
    "getOverlappingDaysInIntervals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getOverlappingDaysInIntervals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverlappingDaysInIntervals"],
    "getQuarter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQuarter"],
    "getSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"],
    "getTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTime"],
    "getUnixTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getUnixTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnixTime"],
    "getWeek",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeek"],
    "getWeekOfMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekOfMonth"],
    "getWeekYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"],
    "getWeeksInMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeeksInMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeeksInMonth"],
    "getYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"],
    "hoursToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursToMilliseconds"],
    "hoursToMinutes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursToMinutes"],
    "hoursToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursToSeconds"],
    "interval",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interval"],
    "intervalToDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intervalToDuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intervalToDuration"],
    "intlFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intlFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intlFormat"],
    "intlFormatDistance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intlFormatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intlFormatDistance"],
    "isAfter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"],
    "isBefore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"],
    "isDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"],
    "isEqual",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqual"],
    "isExists",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isExists$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExists"],
    "isFirstDayOfMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFirstDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirstDayOfMonth"],
    "isFriday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFriday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFriday"],
    "isFuture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFuture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFuture"],
    "isLastDayOfMonth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastDayOfMonth"],
    "isLeapYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLeapYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLeapYear"],
    "isMatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isMatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMatch"],
    "isMonday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isMonday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMonday"],
    "isPast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPast"],
    "isSameDay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"],
    "longFormatters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longFormatters"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addBusinessDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addHours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addISOWeekYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addQuarters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addSeconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/addYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$areIntervalsOverlapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/areIntervalsOverlapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/clamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestIndexTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/closestIndexTo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$closestTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/closestTo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareAsc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareDesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/compareDesc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/constructNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$daysToWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/daysToWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInBusinessDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInBusinessDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarISOWeekYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarISOWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarISOWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarQuarters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInCalendarYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInHours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInISOWeekYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInISOWeekYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInQuarters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInQuarters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInSeconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/differenceInYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachHourOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachHourOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachMinuteOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachMinuteOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachMonthOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachQuarterOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachQuarterOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachWeekendOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachWeekendOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$eachYearOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/eachYearOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDecade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfDecade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfHour$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfHour.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMinute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMinute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfQuarter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfSecond$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfSecond.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfTomorrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfTomorrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/endOfYesterday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceStrict.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceToNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNowStrict$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDistanceToNowStrict.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatDuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISO9075$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISO9075.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatISODuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatISODuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRFC3339$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRFC3339.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRFC7231$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRFC7231.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$fromUnixTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/fromUnixTime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDaysInMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDaysInYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDaysInYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDecade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDecade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDefaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getDefaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getHours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISODay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISODay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeeksInYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getISOWeeksInYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getOverlappingDaysInIntervals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getOverlappingDaysInIntervals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getQuarter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getSeconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getTime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getUnixTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getUnixTime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeekOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeeksInMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getWeeksInMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/getYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$hoursToSeconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/hoursToSeconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intervalToDuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intervalToDuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intlFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intlFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$intlFormatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/intlFormatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isAfter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isBefore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isExists$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isExists.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFirstDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFirstDayOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFriday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFriday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isFuture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isFuture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLastDayOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLeapYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isLeapYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isMatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isMatch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isMonday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isMonday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isPast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Megaai$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Megaai/frontend/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './isSameHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSameYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThisYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isToday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isTomorrow.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isValid.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWeekend.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isWithinInterval.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './isYesterday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfDecade.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lastDayOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './lightFormat.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './max.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './milliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './millisecondsToSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './min.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './minutesToSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './monthsToQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './monthsToYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextFriday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextMonday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './nextWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parse.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parseISO.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './parseJSON.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousFriday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousMonday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousSaturday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousSunday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousThursday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousTuesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './previousWednesday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './quartersToMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './quartersToYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './roundToNearestHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './roundToNearestMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './secondsToMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './set.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDayOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setDefaultOptions.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISODay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './setYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfDay.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfDecade.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfHour.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfISOWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfISOWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfMinute.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfMonth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfQuarter.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfSecond.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfToday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfTomorrow.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfWeek.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfWeekYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfYear.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './startOfYesterday.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './sub.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subBusinessDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subHours.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subISOWeekYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMilliseconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMinutes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subSeconds.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subWeeks.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './subYears.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './toDate.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './transpose.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './weeksToDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToDays.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToMonths.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './yearsToQuarters.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
];

//# sourceMappingURL=be213_date-fns_6dba4280._.js.map