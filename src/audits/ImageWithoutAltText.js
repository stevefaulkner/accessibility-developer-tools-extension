// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

AuditRules.addRule({
    name: 'imagesWithoutAltText',
    severity: Severity.Warning,
    relevantNodesSelector: function() {
        return this.auditscope_.querySelectorAll('img');
    },
    test: function(image) {
        return (!image.hasAttribute('alt') && image.getAttribute('role') != 'presentation');
    },
    code: 'AX_TEXT_02',
    ruleName: 'Images should have an alt attribute',
    resultsDetails: 'Images should have an alt attribute, unless they have an ARIA role of "presentation".',
    url: 'https://code.google.com/p/accessibility-developer-tools/wiki/AuditRules#AX_TEXT_02:_Images_should_have_an_alt_attribute,_unless_they_hav'
});

