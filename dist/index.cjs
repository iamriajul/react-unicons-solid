"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  UisAirplay: () => import_uis_airplay.default,
  UisAlignAlt: () => import_uis_align_alt.default,
  UisAlignCenter: () => import_uis_align_center.default,
  UisAlignCenterJustify: () => import_uis_align_center_justify.default,
  UisAlignJustify: () => import_uis_align_justify.default,
  UisAlignLeft: () => import_uis_align_left.default,
  UisAlignLeftJustify: () => import_uis_align_left_justify.default,
  UisAlignLetterRight: () => import_uis_align_letter_right.default,
  UisAlignRight: () => import_uis_align_right.default,
  UisAlignRightJustify: () => import_uis_align_right_justify.default,
  UisAnalysis: () => import_uis_analysis.default,
  UisAnalytics: () => import_uis_analytics.default,
  UisAnchor: () => import_uis_anchor.default,
  UisAngleDoubleDown: () => import_uis_angle_double_down.default,
  UisAngleDoubleLeft: () => import_uis_angle_double_left.default,
  UisAngleDoubleRight: () => import_uis_angle_double_right.default,
  UisAngleDoubleUp: () => import_uis_angle_double_up.default,
  UisAngleDown: () => import_uis_angle_down.default,
  UisAngleLeft: () => import_uis_angle_left.default,
  UisAngleRight: () => import_uis_angle_right.default,
  UisAngleRightB: () => import_uis_angle_right_b.default,
  UisAngleUp: () => import_uis_angle_up.default,
  UisApps: () => import_uis_apps.default,
  UisArrowCircleDown: () => import_uis_arrow_circle_down.default,
  UisArrowCircleLeft: () => import_uis_arrow_circle_left.default,
  UisArrowCircleRight: () => import_uis_arrow_circle_right.default,
  UisArrowCircleUp: () => import_uis_arrow_circle_up.default,
  UisArrowDownLeft: () => import_uis_arrow_down_left.default,
  UisArrowDownRight: () => import_uis_arrow_down_right.default,
  UisArrowUpLeft: () => import_uis_arrow_up_left.default,
  UisArrowUpRight: () => import_uis_arrow_up_right.default,
  UisAt: () => import_uis_at.default,
  UisBag: () => import_uis_bag.default,
  UisBars: () => import_uis_bars.default,
  UisBatteryBolt: () => import_uis_battery_bolt.default,
  UisBatteryEmpty: () => import_uis_battery_empty.default,
  UisBookmark: () => import_uis_bookmark.default,
  UisBorderAlt: () => import_uis_border_alt.default,
  UisBorderBottom: () => import_uis_border_bottom.default,
  UisBorderClear: () => import_uis_border_clear.default,
  UisBorderHorizontal: () => import_uis_border_horizontal.default,
  UisBorderInner: () => import_uis_border_inner.default,
  UisBorderLeft: () => import_uis_border_left.default,
  UisBorderOut: () => import_uis_border_out.default,
  UisBorderRight: () => import_uis_border_right.default,
  UisBorderTop: () => import_uis_border_top.default,
  UisBorderVertical: () => import_uis_border_vertical.default,
  UisBriefcase: () => import_uis_briefcase.default,
  UisCalender: () => import_uis_calender.default,
  UisChart: () => import_uis_chart.default,
  UisChartPie: () => import_uis_chart_pie.default,
  UisCheck: () => import_uis_check.default,
  UisCheckCircle: () => import_uis_check_circle.default,
  UisCheckSquare: () => import_uis_check_square.default,
  UisCircleLayer: () => import_uis_circle_layer.default,
  UisClinicMedical: () => import_uis_clinic_medical.default,
  UisClock: () => import_uis_clock.default,
  UisClockEight: () => import_uis_clock_eight.default,
  UisClockFive: () => import_uis_clock_five.default,
  UisClockNine: () => import_uis_clock_nine.default,
  UisClockSeven: () => import_uis_clock_seven.default,
  UisClockTen: () => import_uis_clock_ten.default,
  UisClockThree: () => import_uis_clock_three.default,
  UisClockTwo: () => import_uis_clock_two.default,
  UisColumns: () => import_uis_columns.default,
  UisCommentDots: () => import_uis_comment_dots.default,
  UisCompress: () => import_uis_compress.default,
  UisCornerDownLeft: () => import_uis_corner_down_left.default,
  UisCornerDownRight: () => import_uis_corner_down_right.default,
  UisCornerLeftDown: () => import_uis_corner_left_down.default,
  UisCornerRightDown: () => import_uis_corner_right_down.default,
  UisCornerUpLeft: () => import_uis_corner_up_left.default,
  UisCornerUpRight: () => import_uis_corner_up_right.default,
  UisCoronavirus: () => import_uis_coronavirus.default,
  UisDialpad: () => import_uis_dialpad.default,
  UisDirection: () => import_uis_direction.default,
  UisDocumentLayoutCenter: () => import_uis_document_layout_center.default,
  UisDocumentLayoutLeft: () => import_uis_document_layout_left.default,
  UisDocumentLayoutRight: () => import_uis_document_layout_right.default,
  UisDownloadAlt: () => import_uis_download_alt.default,
  UisEllipsisH: () => import_uis_ellipsis_h.default,
  UisEllipsisV: () => import_uis_ellipsis_v.default,
  UisExclamationCircle: () => import_uis_exclamation_circle.default,
  UisExclamationOctagon: () => import_uis_exclamation_octagon.default,
  UisExclamationTriangle: () => import_uis_exclamation_triangle.default,
  UisFavorite: () => import_uis_favorite.default,
  UisFlipH: () => import_uis_flip_h.default,
  UisFlipHAlt: () => import_uis_flip_h_alt.default,
  UisFlipV: () => import_uis_flip_v.default,
  UisFlipVAlt: () => import_uis_flip_v_alt.default,
  UisGraphBar: () => import_uis_graph_bar.default,
  UisGrid: () => import_uis_grid.default,
  UisGrids: () => import_uis_grids.default,
  UisGripHorizontalLine: () => import_uis_grip_horizontal_line.default,
  UisHeadSide: () => import_uis_head_side.default,
  UisHeadSideCough: () => import_uis_head_side_cough.default,
  UisHeadSideMask: () => import_uis_head_side_mask.default,
  UisHistory: () => import_uis_history.default,
  UisHistoryAlt: () => import_uis_history_alt.default,
  UisHorizontalAlignLeft: () => import_uis_horizontal_align_left.default,
  UisHospital: () => import_uis_hospital.default,
  UisHospitalSquareSign: () => import_uis_hospital_square_sign.default,
  UisHospitalSymbol: () => import_uis_hospital_symbol.default,
  UisHouseUser: () => import_uis_house_user.default,
  UisImageV: () => import_uis_image_v.default,
  UisKeySkeleton: () => import_uis_key_skeleton.default,
  UisKeySkeletonAlt: () => import_uis_key_skeleton_alt.default,
  UisKeyholeCircle: () => import_uis_keyhole_circle.default,
  UisKeyholeSquare: () => import_uis_keyhole_square.default,
  UisKeyholeSquareFull: () => import_uis_keyhole_square_full.default,
  UisLayerGroup: () => import_uis_layer_group.default,
  UisLayersAlt: () => import_uis_layers_alt.default,
  UisLeftIndent: () => import_uis_left_indent.default,
  UisLeftIndentAlt: () => import_uis_left_indent_alt.default,
  UisLineSpacing: () => import_uis_line_spacing.default,
  UisLinkH: () => import_uis_link_h.default,
  UisListUiAlt: () => import_uis_list_ui_alt.default,
  UisListUl: () => import_uis_list_ul.default,
  UisLock: () => import_uis_lock.default,
  UisLockAccess: () => import_uis_lock_access.default,
  UisLockAlt: () => import_uis_lock_alt.default,
  UisLockOpenAlt: () => import_uis_lock_open_alt.default,
  UisMicroscope: () => import_uis_microscope.default,
  UisMinusSquareFull: () => import_uis_minus_square_full.default,
  UisMultiply: () => import_uis_multiply.default,
  UisObjectGroup: () => import_uis_object_group.default,
  UisObjectUngroup: () => import_uis_object_ungroup.default,
  UisPadlock: () => import_uis_padlock.default,
  UisPaperclip: () => import_uis_paperclip.default,
  UisParagraph: () => import_uis_paragraph.default,
  UisPentagon: () => import_uis_pentagon.default,
  UisPolygon: () => import_uis_polygon.default,
  UisPrevious: () => import_uis_previous.default,
  UisProcess: () => import_uis_process.default,
  UisRecordAudio: () => import_uis_record_audio.default,
  UisRedo: () => import_uis_redo.default,
  UisRefresh: () => import_uis_refresh.default,
  UisRepeat: () => import_uis_repeat.default,
  UisRightIndent: () => import_uis_right_indent.default,
  UisRightIndentAlt: () => import_uis_right_indent_alt.default,
  UisRocket: () => import_uis_rocket.default,
  UisRuler: () => import_uis_ruler.default,
  UisRulerCombined: () => import_uis_ruler_combined.default,
  UisSanitizer: () => import_uis_sanitizer.default,
  UisSanitizerAlt: () => import_uis_sanitizer_alt.default,
  UisScenery: () => import_uis_scenery.default,
  UisSchedule: () => import_uis_schedule.default,
  UisShieldPlus: () => import_uis_shield_plus.default,
  UisSignalAlt: () => import_uis_signal_alt.default,
  UisSignalAlt3: () => import_uis_signal_alt_3.default,
  UisSignout: () => import_uis_signout.default,
  UisSocialDistancing: () => import_uis_social_distancing.default,
  UisSorting: () => import_uis_sorting.default,
  UisSpaceKey: () => import_uis_space_key.default,
  UisSquareFull: () => import_uis_square_full.default,
  UisStar: () => import_uis_star.default,
  UisStarHalfAlt: () => import_uis_star_half_alt.default,
  UisStepForward: () => import_uis_step_forward.default,
  UisStethoscope: () => import_uis_stethoscope.default,
  UisStethoscopeAlt: () => import_uis_stethoscope_alt.default,
  UisStopwatch: () => import_uis_stopwatch.default,
  UisStoreSlash: () => import_uis_store_slash.default,
  UisSubject: () => import_uis_subject.default,
  UisSyncExclamation: () => import_uis_sync_exclamation.default,
  UisSyncSlash: () => import_uis_sync_slash.default,
  UisTable: () => import_uis_table.default,
  UisThLarge: () => import_uis_th_large.default,
  UisTimesCircle: () => import_uis_times_circle.default,
  UisToggleOff: () => import_uis_toggle_off.default,
  UisToggleOn: () => import_uis_toggle_on.default,
  UisToiletPaper: () => import_uis_toilet_paper.default,
  UisTriangle: () => import_uis_triangle.default,
  UisUnlock: () => import_uis_unlock.default,
  UisUnlockAlt: () => import_uis_unlock_alt.default,
  UisUploadAlt: () => import_uis_upload_alt.default,
  UisUserArrows: () => import_uis_user_arrows.default,
  UisUserMd: () => import_uis_user_md.default,
  UisUserNurse: () => import_uis_user_nurse.default,
  UisVectorSquare: () => import_uis_vector_square.default,
  UisVectorSquareAlt: () => import_uis_vector_square_alt.default,
  UisVirusSlash: () => import_uis_virus_slash.default,
  UisWebGrid: () => import_uis_web_grid.default,
  UisWebGridAlt: () => import_uis_web_grid_alt.default,
  UisWebSection: () => import_uis_web_section.default,
  UisWebSectionAlt: () => import_uis_web_section_alt.default,
  UisWindowGrid: () => import_uis_window_grid.default,
  UisWindowMaximize: () => import_uis_window_maximize.default,
  UisWindowSection: () => import_uis_window_section.default,
  UisWrapText: () => import_uis_wrap_text.default
});
module.exports = __toCommonJS(src_exports);
var import_uis_airplay = __toESM(require("./icons/uis-airplay"), 1);
var import_uis_align_alt = __toESM(require("./icons/uis-align-alt"), 1);
var import_uis_align_center = __toESM(require("./icons/uis-align-center"), 1);
var import_uis_align_center_justify = __toESM(require("./icons/uis-align-center-justify"), 1);
var import_uis_align_justify = __toESM(require("./icons/uis-align-justify"), 1);
var import_uis_align_left = __toESM(require("./icons/uis-align-left"), 1);
var import_uis_align_left_justify = __toESM(require("./icons/uis-align-left-justify"), 1);
var import_uis_align_letter_right = __toESM(require("./icons/uis-align-letter-right"), 1);
var import_uis_align_right = __toESM(require("./icons/uis-align-right"), 1);
var import_uis_align_right_justify = __toESM(require("./icons/uis-align-right-justify"), 1);
var import_uis_analysis = __toESM(require("./icons/uis-analysis"), 1);
var import_uis_analytics = __toESM(require("./icons/uis-analytics"), 1);
var import_uis_anchor = __toESM(require("./icons/uis-anchor"), 1);
var import_uis_angle_double_down = __toESM(require("./icons/uis-angle-double-down"), 1);
var import_uis_angle_double_left = __toESM(require("./icons/uis-angle-double-left"), 1);
var import_uis_angle_double_right = __toESM(require("./icons/uis-angle-double-right"), 1);
var import_uis_angle_double_up = __toESM(require("./icons/uis-angle-double-up"), 1);
var import_uis_angle_down = __toESM(require("./icons/uis-angle-down"), 1);
var import_uis_angle_left = __toESM(require("./icons/uis-angle-left"), 1);
var import_uis_angle_right = __toESM(require("./icons/uis-angle-right"), 1);
var import_uis_angle_right_b = __toESM(require("./icons/uis-angle-right-b"), 1);
var import_uis_angle_up = __toESM(require("./icons/uis-angle-up"), 1);
var import_uis_apps = __toESM(require("./icons/uis-apps"), 1);
var import_uis_arrow_circle_down = __toESM(require("./icons/uis-arrow-circle-down"), 1);
var import_uis_arrow_circle_left = __toESM(require("./icons/uis-arrow-circle-left"), 1);
var import_uis_arrow_circle_right = __toESM(require("./icons/uis-arrow-circle-right"), 1);
var import_uis_arrow_circle_up = __toESM(require("./icons/uis-arrow-circle-up"), 1);
var import_uis_arrow_down_left = __toESM(require("./icons/uis-arrow-down-left"), 1);
var import_uis_arrow_down_right = __toESM(require("./icons/uis-arrow-down-right"), 1);
var import_uis_arrow_up_left = __toESM(require("./icons/uis-arrow-up-left"), 1);
var import_uis_arrow_up_right = __toESM(require("./icons/uis-arrow-up-right"), 1);
var import_uis_at = __toESM(require("./icons/uis-at"), 1);
var import_uis_bag = __toESM(require("./icons/uis-bag"), 1);
var import_uis_bars = __toESM(require("./icons/uis-bars"), 1);
var import_uis_battery_bolt = __toESM(require("./icons/uis-battery-bolt"), 1);
var import_uis_battery_empty = __toESM(require("./icons/uis-battery-empty"), 1);
var import_uis_bookmark = __toESM(require("./icons/uis-bookmark"), 1);
var import_uis_border_alt = __toESM(require("./icons/uis-border-alt"), 1);
var import_uis_border_bottom = __toESM(require("./icons/uis-border-bottom"), 1);
var import_uis_border_clear = __toESM(require("./icons/uis-border-clear"), 1);
var import_uis_border_horizontal = __toESM(require("./icons/uis-border-horizontal"), 1);
var import_uis_border_inner = __toESM(require("./icons/uis-border-inner"), 1);
var import_uis_border_left = __toESM(require("./icons/uis-border-left"), 1);
var import_uis_border_out = __toESM(require("./icons/uis-border-out"), 1);
var import_uis_border_right = __toESM(require("./icons/uis-border-right"), 1);
var import_uis_border_top = __toESM(require("./icons/uis-border-top"), 1);
var import_uis_border_vertical = __toESM(require("./icons/uis-border-vertical"), 1);
var import_uis_briefcase = __toESM(require("./icons/uis-briefcase"), 1);
var import_uis_calender = __toESM(require("./icons/uis-calender"), 1);
var import_uis_chart = __toESM(require("./icons/uis-chart"), 1);
var import_uis_chart_pie = __toESM(require("./icons/uis-chart-pie"), 1);
var import_uis_check = __toESM(require("./icons/uis-check"), 1);
var import_uis_check_circle = __toESM(require("./icons/uis-check-circle"), 1);
var import_uis_check_square = __toESM(require("./icons/uis-check-square"), 1);
var import_uis_circle_layer = __toESM(require("./icons/uis-circle-layer"), 1);
var import_uis_clinic_medical = __toESM(require("./icons/uis-clinic-medical"), 1);
var import_uis_clock = __toESM(require("./icons/uis-clock"), 1);
var import_uis_clock_eight = __toESM(require("./icons/uis-clock-eight"), 1);
var import_uis_clock_five = __toESM(require("./icons/uis-clock-five"), 1);
var import_uis_clock_nine = __toESM(require("./icons/uis-clock-nine"), 1);
var import_uis_clock_seven = __toESM(require("./icons/uis-clock-seven"), 1);
var import_uis_clock_ten = __toESM(require("./icons/uis-clock-ten"), 1);
var import_uis_clock_three = __toESM(require("./icons/uis-clock-three"), 1);
var import_uis_clock_two = __toESM(require("./icons/uis-clock-two"), 1);
var import_uis_columns = __toESM(require("./icons/uis-columns"), 1);
var import_uis_comment_dots = __toESM(require("./icons/uis-comment-dots"), 1);
var import_uis_compress = __toESM(require("./icons/uis-compress"), 1);
var import_uis_corner_down_left = __toESM(require("./icons/uis-corner-down-left"), 1);
var import_uis_corner_down_right = __toESM(require("./icons/uis-corner-down-right"), 1);
var import_uis_corner_left_down = __toESM(require("./icons/uis-corner-left-down"), 1);
var import_uis_corner_right_down = __toESM(require("./icons/uis-corner-right-down"), 1);
var import_uis_corner_up_left = __toESM(require("./icons/uis-corner-up-left"), 1);
var import_uis_corner_up_right = __toESM(require("./icons/uis-corner-up-right"), 1);
var import_uis_coronavirus = __toESM(require("./icons/uis-coronavirus"), 1);
var import_uis_dialpad = __toESM(require("./icons/uis-dialpad"), 1);
var import_uis_direction = __toESM(require("./icons/uis-direction"), 1);
var import_uis_document_layout_center = __toESM(require("./icons/uis-document-layout-center"), 1);
var import_uis_document_layout_left = __toESM(require("./icons/uis-document-layout-left"), 1);
var import_uis_document_layout_right = __toESM(require("./icons/uis-document-layout-right"), 1);
var import_uis_download_alt = __toESM(require("./icons/uis-download-alt"), 1);
var import_uis_ellipsis_h = __toESM(require("./icons/uis-ellipsis-h"), 1);
var import_uis_ellipsis_v = __toESM(require("./icons/uis-ellipsis-v"), 1);
var import_uis_exclamation_circle = __toESM(require("./icons/uis-exclamation-circle"), 1);
var import_uis_exclamation_octagon = __toESM(require("./icons/uis-exclamation-octagon"), 1);
var import_uis_exclamation_triangle = __toESM(require("./icons/uis-exclamation-triangle"), 1);
var import_uis_favorite = __toESM(require("./icons/uis-favorite"), 1);
var import_uis_flip_h = __toESM(require("./icons/uis-flip-h"), 1);
var import_uis_flip_h_alt = __toESM(require("./icons/uis-flip-h-alt"), 1);
var import_uis_flip_v = __toESM(require("./icons/uis-flip-v"), 1);
var import_uis_flip_v_alt = __toESM(require("./icons/uis-flip-v-alt"), 1);
var import_uis_graph_bar = __toESM(require("./icons/uis-graph-bar"), 1);
var import_uis_grid = __toESM(require("./icons/uis-grid"), 1);
var import_uis_grids = __toESM(require("./icons/uis-grids"), 1);
var import_uis_grip_horizontal_line = __toESM(require("./icons/uis-grip-horizontal-line"), 1);
var import_uis_head_side = __toESM(require("./icons/uis-head-side"), 1);
var import_uis_head_side_cough = __toESM(require("./icons/uis-head-side-cough"), 1);
var import_uis_head_side_mask = __toESM(require("./icons/uis-head-side-mask"), 1);
var import_uis_history = __toESM(require("./icons/uis-history"), 1);
var import_uis_history_alt = __toESM(require("./icons/uis-history-alt"), 1);
var import_uis_horizontal_align_left = __toESM(require("./icons/uis-horizontal-align-left"), 1);
var import_uis_hospital = __toESM(require("./icons/uis-hospital"), 1);
var import_uis_hospital_square_sign = __toESM(require("./icons/uis-hospital-square-sign"), 1);
var import_uis_hospital_symbol = __toESM(require("./icons/uis-hospital-symbol"), 1);
var import_uis_house_user = __toESM(require("./icons/uis-house-user"), 1);
var import_uis_image_v = __toESM(require("./icons/uis-image-v"), 1);
var import_uis_key_skeleton = __toESM(require("./icons/uis-key-skeleton"), 1);
var import_uis_key_skeleton_alt = __toESM(require("./icons/uis-key-skeleton-alt"), 1);
var import_uis_keyhole_circle = __toESM(require("./icons/uis-keyhole-circle"), 1);
var import_uis_keyhole_square = __toESM(require("./icons/uis-keyhole-square"), 1);
var import_uis_keyhole_square_full = __toESM(require("./icons/uis-keyhole-square-full"), 1);
var import_uis_layer_group = __toESM(require("./icons/uis-layer-group"), 1);
var import_uis_layers_alt = __toESM(require("./icons/uis-layers-alt"), 1);
var import_uis_left_indent = __toESM(require("./icons/uis-left-indent"), 1);
var import_uis_left_indent_alt = __toESM(require("./icons/uis-left-indent-alt"), 1);
var import_uis_line_spacing = __toESM(require("./icons/uis-line-spacing"), 1);
var import_uis_link_h = __toESM(require("./icons/uis-link-h"), 1);
var import_uis_list_ui_alt = __toESM(require("./icons/uis-list-ui-alt"), 1);
var import_uis_list_ul = __toESM(require("./icons/uis-list-ul"), 1);
var import_uis_lock = __toESM(require("./icons/uis-lock"), 1);
var import_uis_lock_access = __toESM(require("./icons/uis-lock-access"), 1);
var import_uis_lock_alt = __toESM(require("./icons/uis-lock-alt"), 1);
var import_uis_lock_open_alt = __toESM(require("./icons/uis-lock-open-alt"), 1);
var import_uis_microscope = __toESM(require("./icons/uis-microscope"), 1);
var import_uis_minus_square_full = __toESM(require("./icons/uis-minus-square-full"), 1);
var import_uis_multiply = __toESM(require("./icons/uis-multiply"), 1);
var import_uis_object_group = __toESM(require("./icons/uis-object-group"), 1);
var import_uis_object_ungroup = __toESM(require("./icons/uis-object-ungroup"), 1);
var import_uis_padlock = __toESM(require("./icons/uis-padlock"), 1);
var import_uis_paperclip = __toESM(require("./icons/uis-paperclip"), 1);
var import_uis_paragraph = __toESM(require("./icons/uis-paragraph"), 1);
var import_uis_pentagon = __toESM(require("./icons/uis-pentagon"), 1);
var import_uis_polygon = __toESM(require("./icons/uis-polygon"), 1);
var import_uis_previous = __toESM(require("./icons/uis-previous"), 1);
var import_uis_process = __toESM(require("./icons/uis-process"), 1);
var import_uis_record_audio = __toESM(require("./icons/uis-record-audio"), 1);
var import_uis_redo = __toESM(require("./icons/uis-redo"), 1);
var import_uis_refresh = __toESM(require("./icons/uis-refresh"), 1);
var import_uis_repeat = __toESM(require("./icons/uis-repeat"), 1);
var import_uis_right_indent = __toESM(require("./icons/uis-right-indent"), 1);
var import_uis_right_indent_alt = __toESM(require("./icons/uis-right-indent-alt"), 1);
var import_uis_rocket = __toESM(require("./icons/uis-rocket"), 1);
var import_uis_ruler = __toESM(require("./icons/uis-ruler"), 1);
var import_uis_ruler_combined = __toESM(require("./icons/uis-ruler-combined"), 1);
var import_uis_sanitizer = __toESM(require("./icons/uis-sanitizer"), 1);
var import_uis_sanitizer_alt = __toESM(require("./icons/uis-sanitizer-alt"), 1);
var import_uis_scenery = __toESM(require("./icons/uis-scenery"), 1);
var import_uis_schedule = __toESM(require("./icons/uis-schedule"), 1);
var import_uis_shield_plus = __toESM(require("./icons/uis-shield-plus"), 1);
var import_uis_signal_alt = __toESM(require("./icons/uis-signal-alt"), 1);
var import_uis_signal_alt_3 = __toESM(require("./icons/uis-signal-alt-3"), 1);
var import_uis_signout = __toESM(require("./icons/uis-signout"), 1);
var import_uis_social_distancing = __toESM(require("./icons/uis-social-distancing"), 1);
var import_uis_sorting = __toESM(require("./icons/uis-sorting"), 1);
var import_uis_space_key = __toESM(require("./icons/uis-space-key"), 1);
var import_uis_square_full = __toESM(require("./icons/uis-square-full"), 1);
var import_uis_star = __toESM(require("./icons/uis-star"), 1);
var import_uis_star_half_alt = __toESM(require("./icons/uis-star-half-alt"), 1);
var import_uis_step_forward = __toESM(require("./icons/uis-step-forward"), 1);
var import_uis_stethoscope = __toESM(require("./icons/uis-stethoscope"), 1);
var import_uis_stethoscope_alt = __toESM(require("./icons/uis-stethoscope-alt"), 1);
var import_uis_stopwatch = __toESM(require("./icons/uis-stopwatch"), 1);
var import_uis_store_slash = __toESM(require("./icons/uis-store-slash"), 1);
var import_uis_subject = __toESM(require("./icons/uis-subject"), 1);
var import_uis_sync_exclamation = __toESM(require("./icons/uis-sync-exclamation"), 1);
var import_uis_sync_slash = __toESM(require("./icons/uis-sync-slash"), 1);
var import_uis_table = __toESM(require("./icons/uis-table"), 1);
var import_uis_th_large = __toESM(require("./icons/uis-th-large"), 1);
var import_uis_times_circle = __toESM(require("./icons/uis-times-circle"), 1);
var import_uis_toggle_off = __toESM(require("./icons/uis-toggle-off"), 1);
var import_uis_toggle_on = __toESM(require("./icons/uis-toggle-on"), 1);
var import_uis_toilet_paper = __toESM(require("./icons/uis-toilet-paper"), 1);
var import_uis_triangle = __toESM(require("./icons/uis-triangle"), 1);
var import_uis_unlock = __toESM(require("./icons/uis-unlock"), 1);
var import_uis_unlock_alt = __toESM(require("./icons/uis-unlock-alt"), 1);
var import_uis_upload_alt = __toESM(require("./icons/uis-upload-alt"), 1);
var import_uis_user_arrows = __toESM(require("./icons/uis-user-arrows"), 1);
var import_uis_user_md = __toESM(require("./icons/uis-user-md"), 1);
var import_uis_user_nurse = __toESM(require("./icons/uis-user-nurse"), 1);
var import_uis_vector_square = __toESM(require("./icons/uis-vector-square"), 1);
var import_uis_vector_square_alt = __toESM(require("./icons/uis-vector-square-alt"), 1);
var import_uis_virus_slash = __toESM(require("./icons/uis-virus-slash"), 1);
var import_uis_web_grid = __toESM(require("./icons/uis-web-grid"), 1);
var import_uis_web_grid_alt = __toESM(require("./icons/uis-web-grid-alt"), 1);
var import_uis_web_section = __toESM(require("./icons/uis-web-section"), 1);
var import_uis_web_section_alt = __toESM(require("./icons/uis-web-section-alt"), 1);
var import_uis_window_grid = __toESM(require("./icons/uis-window-grid"), 1);
var import_uis_window_maximize = __toESM(require("./icons/uis-window-maximize"), 1);
var import_uis_window_section = __toESM(require("./icons/uis-window-section"), 1);
var import_uis_wrap_text = __toESM(require("./icons/uis-wrap-text"), 1);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UisAirplay,
  UisAlignAlt,
  UisAlignCenter,
  UisAlignCenterJustify,
  UisAlignJustify,
  UisAlignLeft,
  UisAlignLeftJustify,
  UisAlignLetterRight,
  UisAlignRight,
  UisAlignRightJustify,
  UisAnalysis,
  UisAnalytics,
  UisAnchor,
  UisAngleDoubleDown,
  UisAngleDoubleLeft,
  UisAngleDoubleRight,
  UisAngleDoubleUp,
  UisAngleDown,
  UisAngleLeft,
  UisAngleRight,
  UisAngleRightB,
  UisAngleUp,
  UisApps,
  UisArrowCircleDown,
  UisArrowCircleLeft,
  UisArrowCircleRight,
  UisArrowCircleUp,
  UisArrowDownLeft,
  UisArrowDownRight,
  UisArrowUpLeft,
  UisArrowUpRight,
  UisAt,
  UisBag,
  UisBars,
  UisBatteryBolt,
  UisBatteryEmpty,
  UisBookmark,
  UisBorderAlt,
  UisBorderBottom,
  UisBorderClear,
  UisBorderHorizontal,
  UisBorderInner,
  UisBorderLeft,
  UisBorderOut,
  UisBorderRight,
  UisBorderTop,
  UisBorderVertical,
  UisBriefcase,
  UisCalender,
  UisChart,
  UisChartPie,
  UisCheck,
  UisCheckCircle,
  UisCheckSquare,
  UisCircleLayer,
  UisClinicMedical,
  UisClock,
  UisClockEight,
  UisClockFive,
  UisClockNine,
  UisClockSeven,
  UisClockTen,
  UisClockThree,
  UisClockTwo,
  UisColumns,
  UisCommentDots,
  UisCompress,
  UisCornerDownLeft,
  UisCornerDownRight,
  UisCornerLeftDown,
  UisCornerRightDown,
  UisCornerUpLeft,
  UisCornerUpRight,
  UisCoronavirus,
  UisDialpad,
  UisDirection,
  UisDocumentLayoutCenter,
  UisDocumentLayoutLeft,
  UisDocumentLayoutRight,
  UisDownloadAlt,
  UisEllipsisH,
  UisEllipsisV,
  UisExclamationCircle,
  UisExclamationOctagon,
  UisExclamationTriangle,
  UisFavorite,
  UisFlipH,
  UisFlipHAlt,
  UisFlipV,
  UisFlipVAlt,
  UisGraphBar,
  UisGrid,
  UisGrids,
  UisGripHorizontalLine,
  UisHeadSide,
  UisHeadSideCough,
  UisHeadSideMask,
  UisHistory,
  UisHistoryAlt,
  UisHorizontalAlignLeft,
  UisHospital,
  UisHospitalSquareSign,
  UisHospitalSymbol,
  UisHouseUser,
  UisImageV,
  UisKeySkeleton,
  UisKeySkeletonAlt,
  UisKeyholeCircle,
  UisKeyholeSquare,
  UisKeyholeSquareFull,
  UisLayerGroup,
  UisLayersAlt,
  UisLeftIndent,
  UisLeftIndentAlt,
  UisLineSpacing,
  UisLinkH,
  UisListUiAlt,
  UisListUl,
  UisLock,
  UisLockAccess,
  UisLockAlt,
  UisLockOpenAlt,
  UisMicroscope,
  UisMinusSquareFull,
  UisMultiply,
  UisObjectGroup,
  UisObjectUngroup,
  UisPadlock,
  UisPaperclip,
  UisParagraph,
  UisPentagon,
  UisPolygon,
  UisPrevious,
  UisProcess,
  UisRecordAudio,
  UisRedo,
  UisRefresh,
  UisRepeat,
  UisRightIndent,
  UisRightIndentAlt,
  UisRocket,
  UisRuler,
  UisRulerCombined,
  UisSanitizer,
  UisSanitizerAlt,
  UisScenery,
  UisSchedule,
  UisShieldPlus,
  UisSignalAlt,
  UisSignalAlt3,
  UisSignout,
  UisSocialDistancing,
  UisSorting,
  UisSpaceKey,
  UisSquareFull,
  UisStar,
  UisStarHalfAlt,
  UisStepForward,
  UisStethoscope,
  UisStethoscopeAlt,
  UisStopwatch,
  UisStoreSlash,
  UisSubject,
  UisSyncExclamation,
  UisSyncSlash,
  UisTable,
  UisThLarge,
  UisTimesCircle,
  UisToggleOff,
  UisToggleOn,
  UisToiletPaper,
  UisTriangle,
  UisUnlock,
  UisUnlockAlt,
  UisUploadAlt,
  UisUserArrows,
  UisUserMd,
  UisUserNurse,
  UisVectorSquare,
  UisVectorSquareAlt,
  UisVirusSlash,
  UisWebGrid,
  UisWebGridAlt,
  UisWebSection,
  UisWebSectionAlt,
  UisWindowGrid,
  UisWindowMaximize,
  UisWindowSection,
  UisWrapText
});
