import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'issued-badge', loadChildren: './addon/badges/pages/issued-badge/issued-badge.module#IssuedBadgePageModule' },
  { path: 'user-badge', loadChildren: './addon/badges/pages/user-badge/user-badge.module#UserBadgePageModule' },
  { path: 'entries', loadChildren: './addon/blog/pages/entries/entries.module#EntriesPageModule' },
  { path: 'day', loadChildren: './addon/calendar/pages/day/day.module#DayPageModule' },
  { path: 'edit-event', loadChildren: './addon/calendar/pages/edit-event/edit-event.module#EditEventPageModule' },
  { path: 'event', loadChildren: './addon/calendar/pages/event/event.module#EventPageModule' },
  { path: 'index', loadChildren: './addon/calendar/pages/index/index.module#IndexPageModule' },
  { path: 'list', loadChildren: './addon/calendar/pages/list/list.module#ListPageModule' },
  { path: 'settings', loadChildren: './addon/calendar/pages/settings/settings.module#SettingsPageModule' },
  { path: 'competencies', loadChildren: './addon/competency/pages/competencies/competencies.module#CompetenciesPageModule' },
  { path: 'competency', loadChildren: './addon/competency/pages/competency/competency.module#CompetencyPageModule' },
  { path: 'competencysummary', loadChildren: './addon/competency/pages/competencysummary/competencysummary.module#CompetencysummaryPageModule' },
  { path: 'coursecompetencies', loadChildren: './addon/competency/pages/coursecompetencies/coursecompetencies.module#CoursecompetenciesPageModule' },
  { path: 'plan', loadChildren: './addon/competency/pages/plan/plan.module#PlanPageModule' },
  { path: 'planlist', loadChildren: './addon/competency/pages/planlist/planlist.module#PlanlistPageModule' },
  { path: 'report', loadChildren: './addon/coursecompletion/pages/report/report.module#ReportPageModule' },
  { path: 'list', loadChildren: './addon/files/pages/list/list.module#ListPageModule' },
  { path: 'devices', loadChildren: './addon/messageoutput/airnotifier/pages/devices/devices.module#DevicesPageModule' },
  { path: 'contacts', loadChildren: './addon/messages/pages/contacts/contacts.module#ContactsPageModule' },
  { path: 'conversation-info', loadChildren: './addon/messages/pages/conversation-info/conversation-info.module#ConversationInfoPageModule' },
  { path: 'discussion', loadChildren: './addon/messages/pages/discussion/discussion.module#DiscussionPageModule' },
  { path: 'group-conversations', loadChildren: './addon/messages/pages/group-conversations/group-conversations.module#GroupConversationsPageModule' },
  { path: 'index', loadChildren: './addon/messages/pages/index/index.module#IndexPageModule' },
  { path: 'search', loadChildren: './addon/messages/pages/search/search.module#SearchPageModule' },
  { path: 'settings', loadChildren: './addon/messages/pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-feedback-modal', loadChildren: './addon/mod/assign/pages/edit-feedback-modal/edit-feedback-modal.module#EditFeedbackModalPageModule' },
  { path: 'edit', loadChildren: './addon/mod/assign/pages/edit/edit.module#EditPageModule' },
  { path: 'index', loadChildren: './addon/mod/assign/pages/index/index.module#IndexPageModule' },
  { path: 'submission-list', loadChildren: './addon/mod/assign/pages/submission-list/submission-list.module#SubmissionListPageModule' },
  { path: 'submission-review', loadChildren: './addon/mod/assign/pages/submission-review/submission-review.module#SubmissionReviewPageModule' },
  { path: 'index', loadChildren: './addon/mod/book/pages/index/index.module#IndexPageModule' },
  { path: 'toc', loadChildren: './addon/mod/book/pages/toc/toc.module#TocPageModule' },
  { path: 'chat', loadChildren: './addon/mod/chat/pages/chat/chat.module#ChatPageModule' },
  { path: 'index', loadChildren: './addon/mod/chat/pages/index/index.module#IndexPageModule' },
  { path: 'session-messages', loadChildren: './addon/mod/chat/pages/session-messages/session-messages.module#SessionMessagesPageModule' },
  { path: 'sessions', loadChildren: './addon/mod/chat/pages/sessions/sessions.module#SessionsPageModule' },
  { path: 'users', loadChildren: './addon/mod/chat/pages/users/users.module#UsersPageModule' },
  { path: 'index', loadChildren: './addon/mod/choice/pages/index/index.module#IndexPageModule' },
  { path: 'edit', loadChildren: './addon/mod/data/pages/edit/edit.module#EditPageModule' },
  { path: 'entry', loadChildren: './addon/mod/data/pages/entry/entry.module#EntryPageModule' },
  { path: 'index', loadChildren: './addon/mod/data/pages/index/index.module#IndexPageModule' },
  { path: 'search', loadChildren: './addon/mod/data/pages/search/search.module#SearchPageModule' },
  { path: 'attempt', loadChildren: './addon/mod/feedback/pages/attempt/attempt.module#AttemptPageModule' },
  { path: 'form', loadChildren: './addon/mod/feedback/pages/form/form.module#FormPageModule' },
  { path: 'index', loadChildren: './addon/mod/feedback/pages/index/index.module#IndexPageModule' },
  { path: 'nonrespondents', loadChildren: './addon/mod/feedback/pages/nonrespondents/nonrespondents.module#NonrespondentsPageModule' },
  { path: 'respondents', loadChildren: './addon/mod/feedback/pages/respondents/respondents.module#RespondentsPageModule' },
  { path: 'index', loadChildren: './addon/mod/folder/pages/index/index.module#IndexPageModule' },
  { path: 'discussion', loadChildren: './addon/mod/forum/pages/discussion/discussion.module#DiscussionPageModule' },
  { path: 'index', loadChildren: './addon/mod/forum/pages/index/index.module#IndexPageModule' },
  { path: 'new-discussion', loadChildren: './addon/mod/forum/pages/new-discussion/new-discussion.module#NewDiscussionPageModule' },
  { path: 'sort-order-selector', loadChildren: './addon/mod/forum/pages/sort-order-selector/sort-order-selector.module#SortOrderSelectorPageModule' },
  { path: 'edit', loadChildren: './addon/mod/glossary/pages/edit/edit.module#EditPageModule' },
  { path: 'entry', loadChildren: './addon/mod/glossary/pages/entry/entry.module#EntryPageModule' },
  { path: 'index', loadChildren: './addon/mod/glossary/pages/index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './addon/mod/imscp/pages/index/index.module#IndexPageModule' },
  { path: 'toc', loadChildren: './addon/mod/imscp/pages/toc/toc.module#TocPageModule' },
  { path: 'index', loadChildren: './addon/mod/lesson/pages/index/index.module#IndexPageModule' },
  { path: 'menu-modal', loadChildren: './addon/mod/lesson/pages/menu-modal/menu-modal.module#MenuModalPageModule' },
  { path: 'password-modal', loadChildren: './addon/mod/lesson/pages/password-modal/password-modal.module#PasswordModalPageModule' },
  { path: 'player', loadChildren: './addon/mod/lesson/pages/player/player.module#PlayerPageModule' },
  { path: 'user-retake', loadChildren: './addon/mod/lesson/pages/user-retake/user-retake.module#UserRetakePageModule' },
  { path: 'index', loadChildren: './addon/mod/lti/pages/index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './addon/mod/page/pages/index/index.module#IndexPageModule' },
  { path: 'attempt', loadChildren: './addon/mod/quiz/pages/attempt/attempt.module#AttemptPageModule' },
  { path: 'index', loadChildren: './addon/mod/quiz/pages/index/index.module#IndexPageModule' },
  { path: 'navigation-modal', loadChildren: './addon/mod/quiz/pages/navigation-modal/navigation-modal.module#NavigationModalPageModule' },
  { path: 'player', loadChildren: './addon/mod/quiz/pages/player/player.module#PlayerPageModule' },
  { path: 'preflight-modal', loadChildren: './addon/mod/quiz/pages/preflight-modal/preflight-modal.module#PreflightModalPageModule' },
  { path: 'review', loadChildren: './addon/mod/quiz/pages/review/review.module#ReviewPageModule' },
  { path: 'index', loadChildren: './addon/mod/resource/pages/index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './addon/mod/scorm/pages/index/index.module#IndexPageModule' },
  { path: 'player', loadChildren: './addon/mod/scorm/pages/player/player.module#PlayerPageModule' },
  { path: 'toc', loadChildren: './addon/mod/scorm/pages/toc/toc.module#TocPageModule' },
  { path: 'index', loadChildren: './addon/mod/survey/pages/index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './addon/mod/url/pages/index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './addon/mod/wiki/pages/index/index.module#IndexPageModule' },
  { path: 'edit', loadChildren: './addon/mod/wiki/pages/edit/edit.module#EditPageModule' },
  { path: 'assessment', loadChildren: './addon/mod/workshop/pages/assessment/assessment.module#AssessmentPageModule' },
  { path: 'edit-submission', loadChildren: './addon/mod/workshop/pages/edit-submission/edit-submission.module#EditSubmissionPageModule' },
  { path: 'index', loadChildren: './addon/mod/workshop/pages/index/index.module#IndexPageModule' },
  { path: 'phase2', loadChildren: './addon/mod/workshop/pages/phase2/phase2.module#Phase2PageModule' },
  { path: 'phase', loadChildren: './addon/mod/workshop/pages/phase/phase.module#PhasePageModule' },
  { path: 'submission', loadChildren: './addon/mod/workshop/pages/submission/submission.module#SubmissionPageModule' },
  { path: 'add', loadChildren: './addon/notes/pages/add/add.module#AddPageModule' },
  { path: 'list', loadChildren: './addon/notes/pages/list/list.module#ListPageModule' },
  { path: 'list', loadChildren: './addon/notifications/pages/list/list.module#ListPageModule' },
  { path: 'settings', loadChildren: './addon/notifications/pages/settings/settings.module#SettingsPageModule' },
  { path: 'course-storage', loadChildren: './addon/storagemanager/pages/course-storage/course-storage.module#CourseStoragePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
